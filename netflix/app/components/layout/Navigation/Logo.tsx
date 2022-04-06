import React, {FC} from 'react';
import Link from 'next/link'
import LogoImage from '@/assets/images/logo.svg'
import Image from "next/image";


const Logo: FC = () => {
    return (
        <Link href="/">
            <a className='px-layout mb-10 block'>
                <Image src={LogoImage} width={247} height={34} alt='online cinema' draggable={false}/>
            </a>
        </Link>
    );
};

export default Logo;