import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Suggestedaccounts.module.scss';
import AccountItem from './AccountItem';
import request from '../../utils/request';
const cx = classNames.bind(styles);
function Suggestedaccounts({ lable, resoult }) {
    const [accounts, setAccounts] = useState([]);
    const [display, setDisplay] = useState('less');
    const handleDisplay = () => {
        if (accounts.length <= 5) {
            setDisplay('more');
        } else {
            setDisplay('less');
        }
    };
    useEffect(() => {
        request
            .get('users/search', {
                params: {
                    q: resoult,
                    type: display,
                },
            })
            .then((res) => {
                setAccounts(res.data.data);
            });
    }, [display, resoult]);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            {accounts.map((account) => {
                return <AccountItem key={account.id} data={account} />;
            })}
            <p className={cx('more-btn')} onClick={handleDisplay}>
                {accounts.length <= 5 ? 'See all' : 'Hide away'}
            </p>
        </div>
    );
}
export default Suggestedaccounts;
