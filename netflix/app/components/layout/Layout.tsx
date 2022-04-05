import style from './Layout.module.scss'
import {FC} from "react";
import Navigation from "@/components/layout/Navigation/Navigation";
import Sidebar from "@/components/layout/Sidebar/Sidebar";

const Layout:FC = ({children}) => {
    return (
        <div className={style.layout}>
            <Navigation />
            <div className={style.center}>{children}</div>
            <Sidebar />
        </div>
    );
};

export default Layout;