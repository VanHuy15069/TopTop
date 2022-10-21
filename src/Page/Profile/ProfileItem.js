import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Image from '../../component/Image';
import Button from '../../component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheckCircle, faEllipsis, faFlag, faShare } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '../../component/Popper/Wrapper';
import { useState } from 'react';
import MenuProfile from './ProfileMenu';
const cx = classNames.bind(styles);
const MenuItems = [
    {
        tag: '</>',
        content: 'Embed',
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
    {
        icon: 'https://cdn-icons-png.flaticon.com/512/341/341077.png',
        content: 'Coppy link',
    },
];
const MenuItemsMore = [
    ...MenuItems,
    {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0adDoUGWVD3jGzfT8grK5Uhw0dLXSk3OWJwZaXI-t95suRZQ-wPF7-Az6KurXDVktV4&usqp=CAU',
        content: 'Share to LinkedIn',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png    ',
        content: 'Share to Telegram',
    },
    {
        icon: 'https://www.mindphp.com/images/mail.png',
        content: 'Share to Email',
    },
    {
        icon: 'https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg',
        content: 'Share to Printerest',
    },
];
function ProfileItem({ resoult }) {
    const reports = [
        {
            icon: <FontAwesomeIcon icon={faFlag} />,
            content: 'Report',
        },
        {
            icon: <FontAwesomeIcon icon={faBan} />,
            content: 'Block',
        },
    ];
    const [menu, setMenu] = useState(MenuItems);
    const [display, setDisplay] = useState(true);
    const handleClick = () => {
        setMenu(MenuItemsMore);
        setDisplay(false);
    };
    const handleLeave = () => {
        setMenu(MenuItems);
        setDisplay(true);
    };
    return (
        <div className={cx('heading')}>
            <div className={cx('heading-wrapper')}>
                <div className={cx('wrapper-img')}>
                    <Image
                        className={cx('img')}
                        src={resoult.avatar}
                        fallBack="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt={resoult.nickname}
                    />
                </div>
                <div className={cx('infor')}>
                    <div className={cx('nick-name')}>
                        <p>{resoult.nickname}</p>
                        {resoult.tick && (
                            <span className={cx('icon-check')}>
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </span>
                        )}
                    </div>
                    <div className={cx('name')}>{resoult.full_name}</div>
                    <div className={cx('btn')}>
                        <Button primary maxLarge>
                            Follow
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('interactive')}>
                <div className={cx('follow')}>
                    <strong>{resoult.followings_count}</strong>
                    <span className={cx('desc')}>Following</span>
                </div>
                <div className={cx('follow')}>
                    <strong>{resoult.followers_count}</strong>
                    <span className={cx('desc')}>Followers</span>
                </div>
                <div className={cx('follow')}>
                    <strong>{resoult.likes_count}</strong>
                    <span className={cx('desc')}>Likes</span>
                </div>
            </div>
            <div className={cx('bio')}>{resoult.bio}</div>
            <div className={cx('wrapper-icon')}>
                <div className={cx('icon')} onMouseLeave={handleLeave}>
                    <FontAwesomeIcon icon={faShare} />
                    <div className={cx('wrap-menu')}>
                        <MenuProfile menu={menu} display={display} handleClick={handleClick} />
                    </div>
                </div>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                    <Wrapper className={cx('report')}>
                        {reports.map((item, index) => {
                            return (
                                <div key={index} className={cx('menu-item')}>
                                    <span className={cx('menu-icon')}>{item.icon}</span>
                                    <span className={cx('menu-content')}>{item.content}</span>
                                </div>
                            );
                        })}
                    </Wrapper>
                </div>
            </div>
        </div>
    );
}
export { MenuItems, MenuItemsMore };
export default ProfileItem;
