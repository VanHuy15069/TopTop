import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Suggestedaccounts.module.scss';
import { Wrapper as PopperWrapper } from '../Popper';
import Button from '../Button';
import Image from '../Image';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-12, 0]}
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('box')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <div className={cx('box-wrapper')}>
                                <div className={cx('box-heading')}>
                                    <Image
                                        className={cx('box-img')}
                                        src={data.avatar}
                                        fallBack="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                        alt={data.name}
                                    />
                                    <Button primary>Follow</Button>
                                </div>
                                <div className={cx('box-content')}>
                                    <p className={cx('box__nick-name')}>
                                        <strong>{data.nickname}</strong>
                                        <span className={cx('icon')}>
                                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                        </span>
                                    </p>
                                    <p className={cx('box-name')}>{data.full_name}</p>
                                </div>
                                <div className={cx('box-like')}>
                                    <p>
                                        <strong>{data.followers_count}</strong>
                                        <span className={cx('like-text')}>Followers</span>
                                    </p>
                                    <p className={cx('like')}>
                                        <strong>{data.likes_count}</strong>
                                        <span className={cx('like-text')}>Likes</span>
                                    </p>
                                </div>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <Link to={`/@${data.nickname}`} className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        fallBack="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        alt={data.name}
                    />
                    <div className={cx('infor')}>
                        <p className={cx('nick-name')}>
                            <strong>{data.nickname}</strong>
                            <span className={cx('icon')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                        </p>
                        <p className={cx('name')}>{data.full_name}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}
export default AccountItem;
