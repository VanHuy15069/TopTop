import Button from '../../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button to={data.to} className={cx(classes)} onClick={onClick}>
            <span className={cx('menu-icon')}>{data.icon}</span>
            {data.title}
        </Button>
    );
}
export default MenuItem;
