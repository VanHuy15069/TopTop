import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function LoginItem({ data, onClick }) {
    return (
        <div className={cx('item')} onClick={onClick}>
            <img className={cx('icon')} src={data.icon} alt="" />
            <p className={cx('item-conten')}>{data.content}</p>
        </div>
    );
}
export default LoginItem;
