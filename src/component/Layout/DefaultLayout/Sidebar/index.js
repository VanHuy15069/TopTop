import classNames from 'classnames/bind';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import routes from '../../../../../src/Config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '../../../SuggestedAccounts';
// import { curentUser } from '../../Login';
import LoginSidebar from './LoginSidebar';
import Discover from './Discover';
import CopyRight from './CopyRight';
import { useContext } from 'react';
import { Context } from '../../../../Provider';
const cx = classNames.bind(styles);
const icons = {
    faHouse: <FontAwesomeIcon icon={faHouse} />,
    faUserGroup: <FontAwesomeIcon icon={faUserGroup} />,
    faVideo: <FontAwesomeIcon icon={faVideo} />,
};
function Sidebar({ sidebarProfile = false }) {
    const [isUser, , ,] = useContext(Context);
    const classNames = cx('wrapper', { sidebarProfile });
    return (
        <div className={classNames}>
            <Menu>
                <MenuItem to="/" title="For you" icon={icons.faHouse} />
                <MenuItem to={routes.follow} title="Following" icon={icons.faUserGroup} />
                <MenuItem to={routes.live} title="Live" icon={icons.faVideo} />
            </Menu>
            {!isUser && <LoginSidebar />}
            <SuggestedAccounts lable="Suggested accounts" resoult="p" />
            {isUser && <SuggestedAccounts lable="Following accounts" resoult="h" />}
            <Discover lable="Discover" />
            <CopyRight />
        </div>
    );
}
export default Sidebar;
