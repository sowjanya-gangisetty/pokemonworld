'use client'

import styles from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Pokemon", link: "/pokemon" },
        { name: "Games", link: "/games" },
    ];
    return (
        <nav className={styles.nav}>
            {navItems && navItems.map((item, index) => (
                <Link
                    className={`${styles.navItem} ${item.link === pathname ? styles.active : ''}`}
                    href={item.link} key={index}>
                    {item.name}
                </Link>
            ))}
        </nav>

    );
}

export default Navigation;