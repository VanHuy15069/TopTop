import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import request from '../../utils/request';
import ProfileItem from './ProfileItem';
import VideoProfile from './Video';
function Profile() {
    const location = useLocation();
    const pathName = location.pathname.slice(2);
    const [user, setUser] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        request
            .get('users/search', {
                params: {
                    q: pathName,
                    type: 'less',
                },
            })
            .then((res) => {
                setUser(res.data.data);
            });
    }, [pathName]);
    useEffect(() => {
        if (user.length > 0) {
            setRender(true);
        }
    }, [user]);
    return (
        <div>
            {render && (
                <div>
                    <ProfileItem resoult={user[0]} />
                    <VideoProfile nickName={user[0].nickname} />
                </div>
            )}
        </div>
    );
}
export default Profile;
