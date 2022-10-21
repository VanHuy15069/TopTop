import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import LoginItem from './LoginItem';
import { Context } from '../../../Provider';
import { useContext, useState } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const MenuLogin = [
        {
            icon: 'https://static-s.aa-cdn.net/img/gp/20600011414728/Ry30qPdhTsZ1Xp16psQdPE3w9fVdxv717ZMhmh_D7QKJQtDAZxNV8oLp30AnbF2Us0o?v=1',
            content: 'Use QR code',
        },
        {
            icon: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png',
            content: 'Use phone / email / user name',
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
            content: 'Continue with Fakebook',
        },
        {
            icon: 'https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK',
            content: 'Continue with Google',
        },
        {
            icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397180207/d242197edc3ff044620cf2d8ff39d6b3.jpg',
            content: 'Continue with Twitter',
        },
        {
            icon: 'https://lh3.googleusercontent.com/OHu1B7oOH9sB3r-19TsAR4r_8RGSzTu0skjw-aSUGBK2QvIqXmV61xUFERltbRIMEQ-TZtlMY_nX-tF-Qg_fL8hnNw=w128-h128-e365-rj-sc0x00ffffff',
            content: 'Continue with LINE',
        },
        {
            icon: 'https://static-s.aa-cdn.net/img/gp/20600000001182/KwGCiEolNEeR9Q4RFOnDtb8Pvqs3LNiQEdE07wMCnoULO3yLUprHbGGLBYNEt8k7WJY?v=1',
            content: 'Continue with KakaoTalk',
        },
        {
            icon: 'https://i0.wp.com/cpoint-lab.co.jp/wp-content/uploads/2020/01/applelogo-1.png?fit=256%2C256&ssl=1&w=144',
            content: 'Continue with Apple',
        },
        {
            icon: 'https://p1.hiclipart.com/preview/209/911/777/macos-app-icons-instagram-png-icon.jpg',
            content: 'Continue with Instagram',
        },
    ];

    const MenuSignUp = [
        {
            icon: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png',
            content: 'Use phone / email / user name',
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
            content: 'Continue with Fakebook',
        },
        {
            icon: 'https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK',
            content: 'Continue with Google',
        },
        {
            icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397180207/d242197edc3ff044620cf2d8ff39d6b3.jpg',
            content: 'Continue with Twitter',
        },
        {
            icon: 'https://lh3.googleusercontent.com/OHu1B7oOH9sB3r-19TsAR4r_8RGSzTu0skjw-aSUGBK2QvIqXmV61xUFERltbRIMEQ-TZtlMY_nX-tF-Qg_fL8hnNw=w128-h128-e365-rj-sc0x00ffffff',
            content: 'Continue with LINE',
        },
        {
            icon: 'https://static-s.aa-cdn.net/img/gp/20600000001182/KwGCiEolNEeR9Q4RFOnDtb8Pvqs3LNiQEdE07wMCnoULO3yLUprHbGGLBYNEt8k7WJY?v=1',
            content: 'Continue with KakaoTalk',
        },
    ];
    const [, setUser, , setShow] = useContext(Context);
    const [menu, setMenu] = useState(MenuLogin);
    const [bool, setBool] = useState(true);

    const handleClick = () => {
        setShow(false);
    };
    const handleSignUp = () => {
        setMenu(MenuSignUp);
        setBool(false);
    };
    const handleLogin = () => {
        setMenu(MenuLogin);
        setBool(true);
    };
    const handler = () => {
        setUser(true);
        setShow(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-box')}>
                <div className={cx('login-container')}>
                    <div className={cx('wrap-content')}>
                        <div className={cx('content')}>
                            {bool ? (
                                <p className={cx('header')}>Log in to TickTok</p>
                            ) : (
                                <p className={cx('header')}>Sign up for TikTok</p>
                            )}

                            {menu.map((item, index) => {
                                return <LoginItem key={index} data={item} onClick={handler} />;
                            })}
                        </div>
                    </div>
                    <div className={cx('wrapper-bottom')}>
                        <div className={cx('desc-content')}>
                            <p className={cx('desc')}>
                                By continuing, you agree to TikTok's{' '}
                                <span className={cx('text')}>Terms of Service</span> and confirm that you have read
                                TikTok's <span className={cx('text')}>Privacy Policy</span>.
                            </p>
                        </div>
                        <div className={cx('bottom')}>
                            <p className={cx('bottom-content')}>Don't have an account? </p>
                            {bool ? (
                                <p href="#" className={cx('link')} onClick={handleSignUp}>
                                    Sign up
                                </p>
                            ) : (
                                <p href="#" className={cx('link')} onClick={handleLogin}>
                                    Log in
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cx('back')} onClick={handleClick}>
                    <span className={cx('icon-back')}>
                        <FontAwesomeIcon icon={faX} />
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Login;
