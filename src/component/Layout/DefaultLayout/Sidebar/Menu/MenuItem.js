import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon }) {
    return (
        <NavLink to={to} end className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('menu-icon')}>{icon}</span>
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}
export default MenuItem;
