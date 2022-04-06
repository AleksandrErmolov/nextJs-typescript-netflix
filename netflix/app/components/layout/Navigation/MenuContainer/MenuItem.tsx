import React, {FC} from 'react';
import {useRouter} from "next/router";
import styles from './Menu.module.scss'
import cn from "classnames";
import {IMenuItem} from "@/components/layout/Navigation/MenuContainer/menu.inteerface";
import Link from 'next/link'
import MaterialIcon from "@/ui/MaterialIcon";

const MenuItem: FC<{ item: IMenuItem }> = ({item}) => {

    const {asPath} = useRouter()
    console.log(asPath)
    console.log(item)
    return (
        <li
            className={cn({
                [styles.active]: asPath === item.link,
            })}
        >
            <Link href={item.link}>
                <a>
                    <MaterialIcon name={item.icon}/>
                    <span>{item.title}</span>
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;