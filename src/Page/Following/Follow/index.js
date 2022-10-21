import classNames from 'classnames/bind';
import styles from './Follow.module.scss';
import FollowItem from './FollowItem';
import videos from '../../../Video';
const cx = classNames.bind(styles);
function Follow() {
    return (
        <div className={cx('wrapper')}>
            {videos.map((item, index) => {
                return (
                    <div key={index} className={cx('user')}>
                        <FollowItem data={item} />
                    </div>
                );
            })}
        </div>
    );
}
export default Follow;
