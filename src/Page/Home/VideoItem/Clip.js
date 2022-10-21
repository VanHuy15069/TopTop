import classNames from 'classnames/bind';
import styles from '../Home.module.scss';
import { useState, useRef, memo, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Clip({ src }) {
    const videoRef = useRef(null);
    const inputRef = useRef();
    // const rangeRef = useRef();
    const [play, setPlay] = useState(false);
    const [value, setValue] = useState(true);
    const [volumeValue, setVolumeValue] = useState(0.7);

    const hanlePlay = () => {
        videoRef.current.play();
        setPlay(true);
    };
    const hanlePause = () => {
        videoRef.current.pause();
        setPlay(false);
    };
    const timerId = useRef();
    const handler = (entries) => {
        const videoEntry = entries[0];
        if (videoEntry.isIntersecting) {
            timerId.current = setInterval(() => {
                videoRef.current.play();
                setPlay(true);
                clearInterval(timerId.current);
            }, 1000);
        } else {
            clearInterval(timerId.current);
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
            setPlay(false);
        }
    };

    useEffect(() => {
        const conFig = {
            root: null,
            rootMargin: '0px',
            threshold: 0.75,
        };
        const obsever = new IntersectionObserver(handler, conFig);
        const vd = videoRef.current;
        if (videoRef.current) {
            obsever.observe(videoRef.current);
            setPlay(true);
        }

        return () => {
            if (vd) {
                obsever.unobserve(vd);
                setPlay(false);
            }
        };
    }, [videoRef]);

    const openVolum = () => {
        videoRef.current.volume = volumeValue;
        inputRef.current.value = volumeValue;
        setValue(false);
    };
    const closeVolume = () => {
        videoRef.current.volume = 0;
        inputRef.current.value = 0;
        setValue(true);
    };

    const handleVolume = useCallback(() => {
        videoRef.current.volume = inputRef.current.value;
        if (videoRef.current.volume > 0) {
            setVolumeValue(inputRef.current.value);
        } else {
            setVolumeValue(0.7);
        }
        if (videoRef.current.volume === 0) {
            setValue(true);
        } else {
            setValue(false);
        }
    }, [videoRef]);

    // const handleUpdate = () => {
    //     if (videoRef.current.duration) {
    //         const progressPercent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    //         rangeRef.current.value = progressPercent;
    //     }
    // };
    // const handleInput = () => {
    //     videoRef.current.currentTime = (rangeRef.current.value * videoRef.current.duration) / 100;
    // };
    return (
        <div className={cx('v')}>
            {/* onTimeUpdate={handleUpdate} */}
            <video ref={videoRef} muted={value} loop className={cx('video')}>
                <source src={src} type="video/mp4" />
            </video>
            <div className={cx('controler')}>
                {play ? (
                    <span className={cx('control')} onClick={hanlePause}>
                        <FontAwesomeIcon icon={faPause} />
                    </span>
                ) : (
                    <span className={cx('control')} onClick={hanlePlay}>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                )}
                <div className={cx('vl-icon')}>
                    <input
                        defaultValue="0"
                        ref={inputRef}
                        type="range"
                        className={cx('input')}
                        min="0"
                        max="1"
                        step="0.1"
                        onInput={handleVolume}
                    />
                    {value ? (
                        <span className={cx('volume')} onClick={openVolum}>
                            <FontAwesomeIcon icon={faVolumeXmark} />
                        </span>
                    ) : (
                        <span className={cx('volume')}>
                            <FontAwesomeIcon icon={faVolumeHigh} onClick={closeVolume} />
                        </span>
                    )}
                </div>
                <div className={cx('report')}>
                    <span className={cx('report-icon')}>
                        <FontAwesomeIcon icon={faFlag} />
                    </span>
                    <p>Report</p>
                </div>
                {/* <input
                    defaultValue="0"
                    className={cx('audio')}
                    ref={rangeRef}
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    onInput={handleInput}
                /> */}
            </div>
        </div>
    );
}
export default memo(Clip);
