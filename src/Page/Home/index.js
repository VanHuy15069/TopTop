import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoItem from './VideoItem/VideoItem';
import Videos from '../../Video';
import { memo } from 'react';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('container')}>
            {Videos.map((video, index) => {
                return <VideoItem key={index} data={video} />;
            })}
        </div>
    );
}
export default memo(Home);
