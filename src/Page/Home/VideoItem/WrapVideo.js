import classNames from 'classnames/bind';
import styles from '../Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faShare, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from '../../../component/Popper';
import Clip from './Clip';
import { MenuItems, MenuItemsMore } from '../../Profile/ProfileItem';
import { useState, useContext, memo, useEffect } from 'react';
import { Context } from '../../../Provider';
const cx = classNames.bind(styles);
function WrapperVideo({ src, heart, comment, share }) {
    const [isUser, , , setShow] = useContext(Context);
    const [menu, setMenu] = useState(MenuItems);
    const [active, setActive] = useState(false);
    const [display, setDisplay] = useState(true);

    const handleClick = () => {
        setMenu(MenuItemsMore);
        setDisplay(false);
    };
    const handleLeave = () => {
        setMenu(MenuItems);
        setDisplay(true);
    };
    const handleShow = () => {
        if (!isUser) {
            setShow(true);
        }
    };
    const handleRelax = () => {
        if (!isUser) setShow(true);
        else setActive((prev) => !prev);
    };
    useEffect(() => {
        if (!isUser) setActive(false);
    }, [isUser]);
    return (
        <div className={cx('wrpper-video')}>
            <div className={cx('wrap-video')}>
                <Clip src={src} />
            </div>
            <div className={cx('Interactive')}>
                <div className={cx('Interactive-icon', { active: active })} onClick={handleRelax}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <span className={cx('number')}>{heart}</span>
                <div className={cx('Interactive-icon')} onClick={handleShow}>
                    <FontAwesomeIcon icon={faCommentDots} />
                </div>
                <span className={cx('number')}>{comment}</span>
                <div className={cx('Interactive-icon')} onMouseLeave={handleLeave}>
                    <FontAwesomeIcon icon={faShare} />
                    <div className={cx('wrap-menu')}>
                        <Wrapper className={cx('menu')}>
                            {menu.map((item, index) => {
                                return (
                                    <div key={index} className={cx('menu-item')}>
                                        {item.icon ? (
                                            <img src={item.icon} className={cx('menu-img')} alt={item.content} />
                                        ) : (
                                            <span className={cx('tag')}>{item.tag}</span>
                                        )}
                                        <span className={cx('menu-content')}>{item.content}</span>
                                    </div>
                                );
                            })}
                            {display && (
                                <span className={cx('down-icon')} onClick={handleClick}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </span>
                            )}
                        </Wrapper>
                    </div>
                </div>
                <span className={cx('number')}>{share}</span>
            </div>
        </div>
    );
}
export default memo(WrapperVideo);
