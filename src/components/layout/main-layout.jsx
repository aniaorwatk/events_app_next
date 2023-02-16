import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import style from "./main-layout.module.scss";

export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={style.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}
