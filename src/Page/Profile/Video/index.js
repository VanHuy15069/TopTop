import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useState, useRef, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import videos from '../../../Video';
import Videos from './Videos';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function VideoProfile({ nickName }) {
    const lineRef = useRef();
    const [line, setLine] = useState(true);
    const handleVideos = () => {
        setLine(true);
        lineRef.current.style.left = '0';
    };
    const handleLiked = () => {
        setLine(false);
        lineRef.current.style.left = '50%';
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-item', { active: line })} onClick={handleVideos}>
                    Videos
                </div>
                <div className={cx('header-item', { active: !line })} onClick={handleLiked}>
                    <span className={cx('lock')}>
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    Liked
                </div>
                <div ref={lineRef} className={cx('line')}></div>
            </div>
            <div className={cx('content')}>
                {line ? (
                    <div className={cx('videos')}>
                        {videos.map((video, index) => {
                            return (
                                <Videos
                                    key={index}
                                    nickName={nickName}
                                    src={video.video}
                                    desc={video.desc}
                                    view={video.view}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className={cx('liked')}>
                        <span className={cx('liked-icon')}>
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                        <p className={cx('liked-title')}>This user's liked videos are private</p>
                        <p className={cx('liked-desc')}>Videos liked by {nickName} are currently hidden</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default memo(VideoProfile);
