import {FC} from "react";
import styles from './Menu.module.scss'
import {IMenu} from "@/components/layout/Navigation/MenuContainer/menu.inteerface";
import MenuItem from "@/components/layout/Navigation/MenuContainer/MenuItem";
import AuthItem from "@/components/layout/Navigation/MenuContainer/auth/AuthItem";

const Menu: FC<{ menu: IMenu }> = ({menu: {items, title}}) => {
    return (
        <div className={styles.menu}>
            <div className={styles.heading}>{title}</div>
            <ul className={styles.ul}>
                {items.map(item =>
                    <MenuItem item={item} key={item.link}/>
                )}
                {title === 'general' ? <AuthItem/> : null}
            </ul>
        </div>
    );
};

export default Menu;