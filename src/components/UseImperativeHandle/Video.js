import { useRef, forwardRef, useImperativeHandle } from 'react'
import video from './Video/download.mp4'

function Video(props, ref)
{
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play()
        {
            videoRef.current.play();
        },
        pause()
        {
            videoRef.current.pause();
        }
    }))

    return (
        <video
            ref={videoRef}
            src={video}
        />
    )
}

export default forwardRef(Video)