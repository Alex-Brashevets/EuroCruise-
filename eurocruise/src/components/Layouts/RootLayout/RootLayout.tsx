
import { Outlet, ScrollRestoration } from 'react-router-dom';
import {Header} from "../../Header/Header";

const RootLayout = () => (
    <>
        <Header/>
        <Outlet/>
        <ScrollRestoration />
    </>
);

export default RootLayout;