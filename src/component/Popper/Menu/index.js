import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../Popper';
import MenuItem from './MenuItem';
import { useState, useEffect, useContext } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Context } from '../../../Provider';
import {
    faFont,
    faCircleQuestion,
    faKeyboard,
    faGear,
    faCoins,
    faUser,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Menu({ children, bool }) {
    const [, setUser, ,] = useContext(Context);
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faFont} />,
            title: 'English',
            id: 1,
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and Help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            //          to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            separate: true,
        },
    ];
    const Languages = [
        {
            code: 'en',
            title: 'English',
        },
        {
            code: 'vi',
            title: 'Viet Nam',
        },
    ];
    const [menu, setMenu] = useState([]);
    const [childrenMenu, setChildrenMenu] = useState(false);
    useEffect(() => {
        if (bool) setMenu(userMenu);
        else setMenu(MENU_ITEMS);
        // eslint-disable-next-line
    }, [bool]);
    const handleClick = (item) => {
        if (item.id) {
            setMenu(Languages);
            setChildrenMenu(true);
        } else if (item.separate) {
            setUser(false);
        }
    };
    const handleHide = () => {
        if (bool) setMenu(userMenu);
        else setMenu(MENU_ITEMS);
        setChildrenMenu(false);
    };
    const handleBack = () => {
        if (bool) {
            setMenu(userMenu);
        } else {
            setMenu(MENU_ITEMS);
        }
        setChildrenMenu(false);
    };
    const renderItem = () => {
        return menu.map((item, index) => {
            return <MenuItem key={index} data={item} onClick={() => handleClick(item)} />;
        });
    };
    return (
        <Tippy
            delay={[0, 300]}
            offset={[13, 10]}
            hideOnClick={false}
            interactive
            placement="bottom-end"
            onHide={handleHide}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {childrenMenu && <Header title="Language" onBack={handleBack} />}
                        <div className={cx('menu-scrollable')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;
