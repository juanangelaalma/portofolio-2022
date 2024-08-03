import React from 'react'
import LazyLoad from 'react-lazy-load';
import img1 from '../assets/projects-previews/twibsnap/1.gif'

const TwibSnap = () => {
  return (
    <>
            <LazyLoad once={true} offsetVertical={300}>
                <img
                    height="100%"
                    width="100%"
                    src={img1}
                    alt="TwibSnap 1"
                />
            </LazyLoad>
        </>
  )
}

export default TwibSnap