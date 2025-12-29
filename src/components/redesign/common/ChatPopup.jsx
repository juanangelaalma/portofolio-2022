import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import assistantAvatar from '../../../assets/images/avatar.webp';

function makeId() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function playCosmicBell({ volume = 0.08 } = {}) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    const t0 = ctx.currentTime;
    master.gain.setValueAtTime(0.0001, t0);
    master.gain.linearRampToValueAtTime(volume, t0 + 0.01);
    master.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.9);

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc2.type = 'sine';

    // Slightly detuned, bell-ish interval (cosmic chime)
    osc1.frequency.setValueAtTime(880, t0);
    osc2.frequency.setValueAtTime(1320, t0);
    osc2.detune.setValueAtTime(-9, t0);

    osc1.connect(master);
    osc2.connect(master);
    osc1.start(t0);
    osc2.start(t0);
    osc1.stop(t0 + 1.0);
    osc2.stop(t0 + 1.0);

    window.setTimeout(() => {
      try {
        ctx.close();
      } catch {
        // ignore
      }
    }, 1200);
  } catch {
    // Autoplay policies may block; ignore.
  }
}

function Avatar({ src, alt, fallback }) {
  return (
    <div className="shrink-0 w-8 h-8 rounded-full gradient-border">
      <div className="w-8 h-8 rounded-full overflow-hidden border border-border bg-background-secondary/60 flex items-center justify-center">
        {src ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img src={src} alt={alt || ''} className="w-full h-full object-cover" />
        ) : (
          <span className="text-[11px] font-semibold text-text-secondary">{fallback}</span>
        )}
      </div>
    </div>
  );
}

function AstronomyMark() {
  return (
    <div className="relative w-10 h-10">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-md"
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.svg
        viewBox="0 0 64 64"
        className="relative w-10 h-10"
        aria-hidden="true"
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="planetGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="1" stopColor="#ec4899" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* Stars */}
        <path
          d="M50 10l1.6 3.4L55 15l-3.4 1.6L50 20l-1.6-3.4L45 15l3.4-1.6L50 10z"
          fill="#fafafa"
          fillOpacity="0.8"
        />
        <path
          d="M14 18l1.2 2.6L18 22l-2.8 1.4L14 26l-1.2-2.6L10 22l2.8-1.4L14 18z"
          fill="#fafafa"
          fillOpacity="0.55"
        />
        {/* Planet */}
        <circle cx="30" cy="36" r="14" fill="url(#planetGradient)" />
        <circle cx="24" cy="32" r="3" fill="#000" fillOpacity="0.18" />
        <circle cx="36" cy="40" r="2" fill="#000" fillOpacity="0.14" />
        {/* Ring */}
        <path
          d="M10 38c8-8 36-12 44-2-9 10-37 14-44 2z"
          fill="#000"
          fillOpacity="0.18"
        />
        <path
          d="M12 38c8-6 33-9 41-2-9 7-32 10-41 2z"
          fill="#fafafa"
          fillOpacity="0.18"
        />
      </motion.svg>
    </div>
  );
}

export default function ChatPopup({
  message,
  author = 'Juan',
  title = 'Chat',
  subtitle = 'Online soon',
  placeholder = 'Type a message…',
  userAvatarSrc,
  suggestions,
  initialMessages,
  onSendMessage,
  delayMs = 800,
  enableSound = true,
  storageKey = 'portfolio_chat_popup_dismissed',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [draft, setDraft] = useState('');
  const [isSending, setIsSending] = useState(false);
  const endRef = useRef(null);

  const hasSeedMessage = Boolean(message) || (Array.isArray(initialMessages) && initialMessages.length > 0);

  const [thread, setThread] = useState(() => {
    if (Array.isArray(initialMessages) && initialMessages.length > 0) {
      return initialMessages
        .filter((m) => m && typeof m === 'object')
        .map((m) => ({
          id: m.id ?? makeId(),
          role: m.role === 'user' ? 'user' : 'assistant',
          text: String(m.text ?? ''),
        }))
        .filter((m) => m.text.trim().length > 0);
    }

    if (!message) return [];

    return [{ id: 'greeting', role: 'assistant', text: String(message) }];
  });

  const canAutoOpen = useMemo(() => {
    if (!hasSeedMessage) return false;
    try {
      return sessionStorage.getItem(storageKey) !== '1';
    } catch {
      return true;
    }
  }, [hasSeedMessage, storageKey]);

  useEffect(() => {
    if (!canAutoOpen || hasAutoOpened) return;
    if (delayMs <= 0) {
      if (enableSound) playCosmicBell();
      setIsOpen(true);
      setHasAutoOpened(true);
      return;
    }
    const t = window.setTimeout(() => {
      if (enableSound) playCosmicBell();
      setIsOpen(true);
      setHasAutoOpened(true);
    }, delayMs);
    return () => window.clearTimeout(t);
  }, [canAutoOpen, delayMs, enableSound, hasAutoOpened]);

  const close = () => {
    setIsOpen(false);
    setHasAutoOpened(true);
    try {
      sessionStorage.setItem(storageKey, '1');
    } catch {
      // ignore
    }
  };

  const toggle = () => setIsOpen((v) => !v);

  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => {
      endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 50);
    return () => window.clearTimeout(t);
  }, [isOpen, thread.length]);

  const sendText = async (rawText) => {
    const text = String(rawText ?? '').trim();
    if (!text || isSending) return;

    const userMsg = { id: makeId(), role: 'user', text };
    setThread((prev) => [...prev, userMsg]);
    setDraft('');

    if (typeof onSendMessage !== 'function') {
      setThread((prev) => [
        ...prev,
        {
          id: makeId(),
          role: 'assistant',
          text: "Thanks! I'll plug the chatbot in here soon.",
        },
      ]);
      return;
    }

    setIsSending(true);
    try {
      const result = await onSendMessage(text);

      if (typeof result === 'string' && result.trim()) {
        setThread((prev) => [...prev, { id: makeId(), role: 'assistant', text: result }]);
      } else if (Array.isArray(result)) {
        const normalized = result
          .filter((m) => m && typeof m === 'object')
          .map((m) => ({
            id: m.id ?? makeId(),
            role: m.role === 'user' ? 'user' : 'assistant',
            text: String(m.text ?? ''),
          }))
          .filter((m) => m.text.trim().length > 0);
        if (normalized.length) setThread((prev) => [...prev, ...normalized]);
      }
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = draft;
    setDraft('');
    await sendText(text);
  };

  const quickReplies = Array.isArray(suggestions) ? suggestions.filter(Boolean).map(String) : [];

  if (!hasSeedMessage) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="w-[22rem] max-w-[calc(100%-2.5rem)]"
          >
            <div className="glass-card overflow-hidden">
              <div className="flex items-center justify-between gap-4 px-4 pt-4">
                <div className="flex items-center gap-3">
                  <Avatar src={assistantAvatar} alt={author} fallback={author?.slice(0, 2)?.toUpperCase()} />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{title}</p>
                    <p className="text-xs text-text-secondary">{subtitle}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="w-9 h-9 rounded-lg border border-border bg-background-secondary/40 hover:bg-background-secondary/70 transition-colors flex items-center justify-center text-text-secondary hover:text-white"
                  aria-label="Close chat"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="px-4 pt-3">
                <div className="max-h-72 overflow-y-auto pr-1 space-y-2 scrollbar-none">
                  {thread.map((m) => (
                    <div
                      key={m.id}
                      className={m.role === 'user' ? 'flex justify-end items-end gap-2' : 'flex justify-start items-end gap-2'}
                    >
                      {m.role !== 'user' && (
                        <Avatar src={assistantAvatar} alt={author} fallback={author?.slice(0, 2)?.toUpperCase()} />
                      )}
                      <div
                        className={
                          m.role === 'user'
                            ? 'max-w-[85%] rounded-2xl border border-border bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 px-4 py-2 text-sm text-text-primary'
                            : 'max-w-[85%] rounded-2xl border border-border bg-background-secondary/60 px-4 py-2 text-sm text-text-primary'
                        }
                      >
                        {m.role !== 'user' && (
                          <p className="text-[11px] text-text-secondary mb-1">{author}</p>
                        )}
                        <p className="whitespace-pre-wrap">{m.text}</p>
                      </div>
                      {m.role === 'user' && (
                        <Avatar src={userAvatarSrc} alt="You" fallback="YOU" />
                      )}
                    </div>
                  ))}
                  <div ref={endRef} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="px-4 pb-4 pt-3">
                {quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {quickReplies.slice(0, 6).map((label) => (
                      <button
                        key={label}
                        type="button"
                        disabled={isSending}
                        onClick={() => sendText(label)}
                        className="text-[10px] px-3 py-1.5 rounded-full border border-border bg-background-secondary/40 hover:bg-background-secondary/70 transition-colors text-text-secondary hover:text-white disabled:opacity-50"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2 rounded-2xl border border-border bg-background-secondary/40 px-3 py-2">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent outline-none text-sm text-text-primary placeholder:text-text-tertiary"
                    aria-label="Chat message"
                  />
                  <button
                    type="submit"
                    disabled={isSending || !draft.trim()}
                    className="w-9 h-9 rounded-xl border border-border bg-background-secondary/60 hover:bg-background-secondary/80 transition-colors flex items-center justify-center text-text-secondary hover:text-white disabled:opacity-50 disabled:hover:bg-background-secondary/60"
                    aria-label="Send message"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggle}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-14 h-14 rounded-2xl gradient-border glass-card flex items-center justify-center"
        aria-label={isOpen ? 'Minimize chat' : 'Open chat'}
      >
        <AstronomyMark />
        {!isOpen && (
          <span className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
