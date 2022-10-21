import classNames from 'classnames/bind';
import styles from './Infor.module.scss';
import videos from '../../../Video';
import Image from '../../../component/Image';
import Button from '../../../component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MenuInfor from './MenuInfor';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { Context } from '../../../Provider';
import { useContext } from 'react';
const cx = classNames.bind(styles);
const IconItems = [
    {
        icon: 'https://icon-library.com/images/code-icon-png/code-icon-png-0.jpg',
        content: 'Embed',
    },
    {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkgIcNfft15Uv-KxV-jui6a4WZVNU9PQ_pp5JHTN10mGgdKhJuTCOBWrBDgh3h3K9hb4&usqp=CAU',
        content: 'Send to friends',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
        content: 'Share to Fakebook',
    },
    {
        icon: 'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',
        content: 'Share to WhatsApp',
    },
    {
        icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397180207/d242197edc3ff044620cf2d8ff39d6b3.jpg',
        content: 'Share to Twitter',
    },
];
function InforVideo({ account, src }) {
    const [isUser, , , setShow] = useContext(Context);
    const curentVideo = videos.filter((video) => {
        return video.video === src;
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={account.avatar} />
                <div className={cx('infor')}>
                    <div className={cx('nick-name')}>
                        {account.nickname}
                        {account.tick && (
                            <span className={cx('check')}>
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </span>
                        )}
                    </div>
                    <div className={cx('full-name')}>{account.full_name}</div>
                </div>
                <span className={cx('button')}>
                    <Button outline>Follow</Button>
                </span>
            </div>
            <div className={cx('container')}>
                <div className={cx('desc')}>{curentVideo[0].desc}</div>
                <div className={cx('music')}>
                    <span className={cx('music-icon')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    <span className={cx('music-link')}>{curentVideo[0].music}</span>
                </div>
                <div className={cx('content')}>
                    <div className={cx('feature')}>
                        <div className={cx('interactive')}>
                            <div className={cx('feelings')}>
                                <span className={cx('feelings-icon')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </span>
                                <div className={cx('amount')}>{curentVideo[0].heart}</div>
                            </div>
                            <div className={cx('feelings')}>
                                <span className={cx('feelings-icon')}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </span>
                                <div className={cx('amount')}>{curentVideo[0].comment}</div>
                            </div>
                        </div>
                        <div className={cx('share')}>
                            {IconItems.map((item, index) => {
                                return (
                                    <span key={index}>
                                        <Tippy content={item.content} placement="top">
                                            <img className={cx('img')} src={item.icon} alt="" />
                                        </Tippy>
                                    </span>
                                );
                            })}
                            <MenuInfor>
                                <span className={cx('share-icon')}>
                                    <FontAwesomeIcon icon={faShare} />
                                </span>
                            </MenuInfor>
                        </div>
                    </div>
                    <div className={cx('content-link')}>
                        <p className={cx('link')}>{account.website_url}</p>
                        <button className={cx('btn')}>Coppy link</button>
                    </div>
                </div>
            </div>
            <div className={cx('comment')}></div>
            <div className={cx('bottom')}>
                {isUser ? (
                    <div className={cx('comment-wrapper')}>
                        <div className={cx('write-comment')}>
                            <input className={cx('comment-input')} type="text" placeholder="Add comment..." />
                            <span className={cx('comment-icon')}>@</span>
                            <span className={cx('comment-icon')}>
                                <FontAwesomeIcon icon={faFaceSmile} />
                            </span>
                        </div>
                        <div className={cx('post')}>Post</div>
                    </div>
                ) : (
                    <div className={cx('input')} onClick={() => setShow(true)}>
                        Please log in to comment
                    </div>
                )}
            </div>
        </div>
    );
}
export default InforVideo;
