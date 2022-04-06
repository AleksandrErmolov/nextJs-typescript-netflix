import React, {FC} from 'react';
import Menu from "@/components/layout/Navigation/MenuContainer/Menu";
import {firstMenu, userMenu} from "@/components/layout/Navigation/MenuContainer/menu.data";

const MenuContainer: FC = () => {
    return (
        <div>
            <Menu menu={firstMenu}/>
            {/*GenresMenu*/}
            <Menu menu={userMenu}/>
        </div>
    );
};

export default MenuContainer;