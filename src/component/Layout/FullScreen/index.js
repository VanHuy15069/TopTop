import Header from '../DefaultLayout/Header';
import Sidebar from '../DefaultLayout/Sidebar';
import classNames from 'classnames/bind';
import styles from './FullScreen.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function FullScreen({ children }) {
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 400) {
                setDisplay(true);
            } else {
                setDisplay(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <div className={cx('header')}>
                <Header maxWith />
            </div>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar sidebarProfile />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
            {display && (
                <div className={cx('scroll')} onClick={handleClick}>
                    <FontAwesomeIcon icon={faCircleUp} />
                </div>
            )}
        </div>
    );
}
export default FullScreen;
