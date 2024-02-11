'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import navData from './navData';

const Header = () => {
    return (
        <>
            {/* Nav Logo */}
            <div>
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width="100" height="100" />
                </Link>
            </div>

            <header>
                <nav>
                    <ul>
                        {navData.map((nav) => (
                            <li key={nav.id}>
                                <Link 
                                    href={nav.path}
                                    className={usePathname() === nav.path ? 'text-primary' : 'text-dark hover:text-primary'}
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    )
};

export default Header;