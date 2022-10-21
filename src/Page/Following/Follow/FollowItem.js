import classNames from 'classnames/bind';
import styles from './Follow.module.scss';
import { useRef, useContext } from 'react';
import Button from '../../../component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../../Provider';
const cx = classNames.bind(styles);
function FollowItem({ data }) {
    const [, , , setShow] = useContext(Context);
    const videoRef = useRef();
    const handleHover = () => {
        videoRef.current.play();
    };
    const handleLeave = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };
    const handeFollow = () => {
        setShow(true);
    };
    return (
        <div className={cx('wrapper-user')} onMouseOver={handleHover} onMouseLeave={handleLeave}>
            <video ref={videoRef} className={cx('video')} src={data.video} muted loop />
            <div className={cx('content')}>
                <img className={cx('avatar')} src={data.avatar} alt="" />
                <p className={cx('name')}>{data.name}</p>
                <p className={cx('nick-name')}>
                    {data.nickName}
                    {data.tick && (
                        <span className={cx('check')}>
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                        </span>
                    )}
                </p>
                <Button primary medium onClick={handeFollow}>
                    Follow
                </Button>
            </div>
        </div>
    );
}
export default FollowItem;
