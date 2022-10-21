import { faHashtag, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
const cx = classNames.bind(styles);
function Discover({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{lable}</p>
            <div className={cx('discover')}>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faHashtag} />
                    </span>
                    <span className={cx('text')}>Idoltohancau</span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faHashtag} />
                    </span>
                    <span className={cx('text')}>VanHuyfanMU</span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faHashtag} />
                    </span>
                    <span className={cx('text')}>KhongchoiTopTop</span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    <span className={cx('text')}>Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media &amp; h0n</span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    <span className={cx('text')}>
                        Về Nghe Mẹ Ru - NSND Bach Tuyet &amp; Hứa Kim Tuyền &amp; 14 Casper &amp; Hoàng Dũng
                    </span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    <span className={cx('text')}>Thiên Thần Tình Yêu - RICKY STAR</span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faHashtag} />
                    </span>
                    <span className={cx('text')}>AnhHuydepzai</span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faHashtag} />
                    </span>
                    <span className={cx('text')}>genzlife</span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    <span className={cx('text')}>Tình Đã Đầy Một Tim - Huyền Tâm Môn</span>
                </p>
                <p className={cx('hashtag')}>
                    <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faMusic} />
                    </span>
                    <span className={cx('text')}>Thằng Đần (Thái Hoàng Remix) [Short Version] - Dunghoangpham</span>
                </p>
            </div>
        </div>
    );
}
export default Discover;
