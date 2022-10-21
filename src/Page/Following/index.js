import { Context } from '../../Provider';
import { useContext } from 'react';
import Follow from './Follow';
import Home from '../Home';

function Following() {
    const [isUser, , ,] = useContext(Context);
    return <div>{isUser ? <Home /> : <Follow />}</div>;
}
export default Following;
