import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import request from '../../utils/request';
import { useState, useEffect, useRef } from 'react';
import { Wrapper as PopperWrapper } from '../../component/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '../AccountItem';
import UseDebounce from '../../hook/Debounce';
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sowResult, setSowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounce = UseDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounce) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        request
            .get('users/search', {
                params: {
                    q: debounce,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(true);
            });
    }, [debounce]);
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setSowResult(false);
    };
    const handleClearItem = () => {
        setSearchResult([]);
        setSearchValue('');
    };
    const handleChange = (e) => {
        const valueSpace = e.target.value;
        if (!valueSpace.startsWith(' ')) {
            setSearchValue(valueSpace);
        }
    };
    return (
        <div>
            <Tippy
                interactive
                visible={sowResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-Result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} onClick={handleClearItem} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search account and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setSowResult(true)}
                    ></input>
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}
export default Search;
