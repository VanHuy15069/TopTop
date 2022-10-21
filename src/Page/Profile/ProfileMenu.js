import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from '../../component/Popper';
const cx = classNames.bind(styles);
function MenuProfile({ menu, display, handleClick }) {
    return (
        <Wrapper className={cx('menu')}>
            {menu.map((item, index) => {
                return (
                    <div key={index} className={cx('menu-item')}>
                        {item.icon ? (
                            <img src={item.icon} className={cx('menu-img')} alt={item.content} />
                        ) : (
                            <span className={cx('tag')}>{item.tag}</span>
                        )}
                        <span className={cx('menu-content')}>{item.content}</span>
                    </div>
                );
            })}
            {display && (
                <span className={cx('down-icon')} onClick={handleClick}>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
            )}
        </Wrapper>
    );
}
export default MenuProfile;
