import style from "./events.module.scss";
import Image from "next/image"

const IdEvents = ({ data }) => {
    return (
        <div className={style.IdEvents}>
            <h1>{data.title}</h1>
            <Image
                priority
                src={data.image}
                alt={data.title}
                width={300}
                height={300}
                layout="responsive"
            objectFit="contain"
            />
            <p>{data.description}</p>
            <form>
                <label>Get Register for this event</label>
                <input type="email"></input>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default IdEvents