import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
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
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
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
export default DefaultLayout;
