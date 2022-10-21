import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEllipsisVertical, faCloudArrowUp, faMessage, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Logo from './logo';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../Image';
import Search from '../../../Search';
import routes from '../../../../Config/routes';
import { useContext } from 'react';
import { Context } from '../../../../Provider';
const cx = classNames.bind(styles);

function Header({ maxWith = false }) {
    const [isUser, , , setShow] = useContext(Context);

    const handleLogin = () => {
        setShow(true);
    };
    const handleUpload = () => {
        if (!isUser) setShow(true);
    };
    const classNames = cx('inner', {
        maxWith,
    });
    return (
        <header className={cx('wrapper')}>
            <div className={classNames}>
                <div className={cx('logo')}>
                    <Link to={routes.home} className={cx('logo-link')}>
                        <Logo />
                    </Link>
                </div>
                <Search></Search>
                <div className={cx('action')}>
                    <Button text onClick={handleUpload}>
                        <span className={cx('btn-icon')}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        Upload
                    </Button>
                    {isUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary onClick={handleLogin}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu bool={isUser}>
                        {isUser ? (
                            <Image
                                className={cx('user-avater')}
                                src="https://static-s.aa-cdn.net/img/gp/20600015975449/ag8c77us-OWyNDZUqLNyN-Yneo_P4ieWZGjPuv50E7C4jle_FBPNNrVbyHaT-VzhWKXu?v=1"
                                alt="Avatar"
                                fallBack="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
