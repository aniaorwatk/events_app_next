import style from "./events.module.scss";
import Link from "next/link";
import Image from "next/image";


const Events = ({data}) => {


    const eventsCities = data.map(ev => {
        return (
            <Link className={style.card} key={ev.id} href={`/events/${ev.id}`} passHref>
                <Image
                    src={ev.image}
                    alt={ev.title}
                    width={200}
                    height={200}
                />
                <h2>{ev.title}</h2>
            </Link>
        )
    })

    return (
        <div className={style.eventsPage}>
            {eventsCities}
        </div>
    )
}
export default Events