import { createContext, useState } from 'react';
import Login from '../component/Layout/Login';
const Context = createContext();
function Provider({ children }) {
    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);
    return (
        <Context.Provider value={[state, setState, show, setShow]}>
            {children}
            {show && <Login />}
        </Context.Provider>
    );
}
export { Context };
export default Provider;
