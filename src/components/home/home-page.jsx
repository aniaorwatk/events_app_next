import Link from "next/link";
import Image from "next/image";
import style from "./home-page.module.scss";

export const HomePage = ({ data }) => {

  const city = data.map(ev => {
    return (
      <Link className={style.card} key={ev.id} href={`/events/${ev.id}`} passHref>
        <div className={style.image}>
          <Image
            priority
            src={ev.image}
            alt={ev.title}
            width={300}
            height={200}
          />
        </div>
        <div className={style.content}>
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </div>
      </Link>
    )
  })
  return (
    <div className={style.homePage}>
      {city}
    </div>
  )
}
