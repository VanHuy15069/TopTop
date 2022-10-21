import classNames from 'classnames/bind';
import styles from '../Home.module.scss';
import { Link } from 'react-router-dom';
import Image from '../../../component/Image';
import Button from '../../../component/Button';
import routes from '../../../Config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import WrapperVideo from './WrapVideo';
const cx = classNames.bind(styles);
function VideoItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('content')}>
                <div className={cx('infor')}>
                    <p className={cx('nick-name')}>
                        {data.nickName}
                        <span className={cx('check')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                    </p>
                    <p className={cx('name')}>{data.name}</p>
                </div>
                <div className={cx('desc')}>
                    <p className={cx('more')}>{data.desc}</p>
                    <div className={cx('btn')}>
                        <Button outline small>
                            Follow
                        </Button>
                    </div>
                </div>
                <Link to={routes.profile} className={cx('music-link')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    {data.music}
                </Link>
                <WrapperVideo src={data.video} heart={data.heart} comment={data.comment} share={data.share} />
            </div>
        </div>
    );
}
export default VideoItem;
