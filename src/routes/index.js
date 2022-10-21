import HeaderOnly from '../component/Layout/HeaderOnly';
import Home from '../Page/Home';
import Following from '../Page/Following';
import Profile from '../Page/Profile';
import Upload from '../Page/Upload';
import Live from '../Page/Live';
import FullScreen from '../component/Layout/FullScreen';
import routes from '../Config/routes';
import NoHeader from '../component/Layout/NoHeader';
import PlayVideo from '../Page/Video';
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.follow, component: Following },
    { path: routes.profile, component: Profile, Layout: FullScreen },
    { path: routes.live, component: Live },
    { path: routes.upload, component: Upload, Layout: HeaderOnly },
    { path: routes.video, component: PlayVideo, Layout: NoHeader },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
