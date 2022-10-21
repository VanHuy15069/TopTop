import classNames from 'classnames/bind';
import styles from './LoginSidebar.module.scss';
import Button from '../../../../Button';
import { useContext } from 'react';
import { Context } from '../../../../../Provider';
const cx = classNames.bind(styles);
function LoginSidebar() {
    const [, , , setShow] = useContext(Context);
    const handleClick = () => {
        setShow(true);
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('text')}>Log in to follow creators, like videos, and view comments.</p>
            <div className={cx('btn')}>
                <Button maxLarge outline onClick={handleClick}>
                    Login
                </Button>
            </div>
        </div>
    );
}
export default LoginSidebar;
