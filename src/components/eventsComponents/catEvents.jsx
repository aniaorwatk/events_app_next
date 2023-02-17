import style from "./events.module.scss";
import Link from "next/link";
import Image from "next/image";

const CatEvents = ({ data, pageName }) => {
    return (
        <div className={style.catEvents}>
            <h2>Events in {(pageName).charAt(0).toUpperCase() + (pageName).slice(1)}</h2>
            <div className={style.content}>
                {data.map(ev => {
                    return (

                        <Link className={style.card} key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
                            <Image
                                src={ev.image}
                                alt={ev.title}
                                width={300}
                                height={300}
                            />
                            <h2>{ev.title}</h2>
                            <p>{ev.description}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CatEvents
