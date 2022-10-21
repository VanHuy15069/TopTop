import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
const cx = classNames.bind(styles);
function VideoItem({ src }) {
    const volumRef = useRef();
    const videoRef = useRef();
    const inputRef = useRef();
    const [value, setValue] = useState(true);
    const [volumeValue, setVolumeValue] = useState(0.7);
    const handleVolum = () => {
        videoRef.current.volume = volumRef.current.value;
        if (videoRef.current.volume > 0) {
            setValue(false);
            setVolumeValue(volumRef.current.value);
        } else {
            setValue(true);
            setVolumeValue(0.7);
        }
    };
    const openVolume = () => {
        videoRef.current.volume = volumeValue;
        volumRef.current.value = volumeValue;
        setValue(false);
    };
    const closeVolume = () => {
        videoRef.current.volum = 0;
        volumRef.current.value = 0;
        setValue(true);
    };
    const handleInput = () => {
        videoRef.current.currentTime = (inputRef.current.value * videoRef.current.duration) / 100;
    };
    const handleUpdate = () => {
        if (videoRef.current.duration) {
            const progressPercent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            inputRef.current.value = progressPercent;
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-video')}>
                <div className={cx('video-content')}>
                    <video
                        ref={videoRef}
                        className={cx('video')}
                        src={src}
                        autoPlay
                        muted={value}
                        loop
                        onTimeUpdate={handleUpdate}
                    />
                    <input
                        ref={inputRef}
                        defaultValue="0"
                        className={cx('audio')}
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        onInput={handleInput}
                    />
                </div>
            </div>
            <span className={cx('report')}>
                <FontAwesomeIcon icon={faFlag} />
                <p>Report</p>
            </span>
            <div className={cx('wrapper-volume')}>
                <input
                    ref={volumRef}
                    defaultValue="0"
                    className={cx('volum-value')}
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    onInput={handleVolum}
                />
                {value ? (
                    <span className={cx('volum')} onClick={openVolume}>
                        <FontAwesomeIcon icon={faVolumeXmark} />
                    </span>
                ) : (
                    <span className={cx('volum')} onClick={closeVolume}>
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    </span>
                )}
            </div>
        </div>
    );
}
export default VideoItem;
