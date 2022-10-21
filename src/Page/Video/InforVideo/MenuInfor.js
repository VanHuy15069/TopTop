import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Infor.module.scss';
import Wrapper from '../../../component/Popper/Wrapper';
const cx = classNames.bind(styles);
const menuItem = [
    {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0adDoUGWVD3jGzfT8grK5Uhw0dLXSk3OWJwZaXI-t95suRZQ-wPF7-Az6KurXDVktV4&usqp=CAU',
        content: 'Share to LinkedIn',
    },
    {
        icon: 'https://styles.redditmedia.com/t5_2rnvp/styles/communityIcon_c157o3k85rr51.png?width=256&s=12a5a3757e18ece8415dd86b855411ffbcb90c5f',
        content: 'Share to Reddit',
    },
    {
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png    ',
        content: 'Share to Telegram',
    },

    {
        icon: 'https://www.mindphp.com/images/mail.png',
        content: 'Share to Email',
    },
    {
        icon: 'https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg',
        content: 'Share to Printerest',
    },
];
function MenuInfor({ children }) {
    return (
        <div>
            <Tippy
                interactive
                offset={[-118, 12]}
                hideOnClick={false}
                delay={[0, 200]}
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('box')} tabIndex="-1" {...attrs}>
                        <Wrapper className={cx('menu')}>
                            {menuItem.map((item, index) => {
                                return (
                                    <div key={index} className={cx('item')}>
                                        <img className={cx('item-img')} src={item.icon} alt="" />
                                        <div className={cx('item=content')}>{item.content}</div>
                                    </div>
                                );
                            })}
                        </Wrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}
export default MenuInfor;
