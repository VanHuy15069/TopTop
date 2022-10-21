import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import VideoItem from './VideoItem/VideoItem';
import InforVideo from './InforVideo/Infor';
import request from '../../utils/request';
const cx = classNames.bind(styles);
function PlayVideo() {
    const location = useLocation();
    const pathName = location.pathname;
    const cut = pathName.indexOf('Video');
    const src = `/static/media/${pathName.slice(cut)}`;
    const nn1 = pathName.indexOf('/@');
    const nn2 = pathName.indexOf('/video');
    const nickName = pathName.slice(nn1 + 2, nn2);
    const [account, setAccount] = useState([]);
    const [render, setRender] = useState(false);
    useEffect(() => {
        request
            .get('users/search', {
                params: {
                    q: nickName,
                    type: 'less',
                },
            })
            .then((res) => {
                setAccount(res.data.data);
            });
    }, [nickName]);
    useEffect(() => {
        if (account.length > 0) {
            setRender(true);
        }
    }, [account]);
    const navigate = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('vieo-item')}>
                <VideoItem src={src} />
            </div>
            {render && <InforVideo account={account[0]} src={src} />}
            <span className={cx('back')} onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faX} />
            </span>
        </div>
    );
}
export default PlayVideo;
