import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);
function AccountItem({ data, onClick }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt=""
                fallBack="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            ></Image>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
export default AccountItem;
