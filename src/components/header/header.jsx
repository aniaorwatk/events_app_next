import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "./../../assets/logo.svg";

export const Header = () => {

    const header = {
        title: "If you have nothing to do, check out what's going on in the city",
        home: "Home",
        events: "Events",
        aboutUs: "About Us",
        altImage: `Page's Logo`
    }
    return (
        <header className={style.header}>
            <div className={style.topNav}>
                <Image src={logo} width={50} height={50} alt={header.altImage} className={style.logo} />
                <nav>
                    <ul>
                        <li>
                            <Link passHref href='/'>
                                {header.home}
                            </Link>
                        </li>
                        <li>
                            <Link passHref href='/events'>
                                {header.events}
                            </Link>
                        </li>
                        <li>
                            <Link passHref href='/about-us'>
                                {header.aboutUs}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>
                {header.title}
            </h1>
        </header>
    )
}
