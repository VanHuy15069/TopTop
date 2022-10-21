import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { memo, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Videos({ src, nickName, desc, view }) {
    const videoRef = useRef();
    const handlePlay = () => {
        videoRef.current.play();
    };
    const handlePause = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };
    return (
        <Link to={`/@${nickName}/video/${src.slice(14)}`}>
            <div className={cx('wrapper-video')}>
                <video
                    ref={videoRef}
                    className={cx('video-item')}
                    src={src}
                    loop
                    muted
                    onMouseOver={handlePlay}
                    onMouseLeave={handlePause}
                />
                <div className={cx('view')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </span>
                    <span className={cx('amount')}>{view}</span>
                </div>
                <div className={cx('wrapper-desc')}>
                    <span className={cx('desc')}>{desc}</span>
                </div>
            </div>
        </Link>
    );
}
export default memo(Videos);
