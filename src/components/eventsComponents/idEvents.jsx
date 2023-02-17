import style from "./events.module.scss";
import Image from "next/image"

const IdEvents =({data})=>{
    return (
        <div className={style.IdEvents}>
            <Image 
                src={data.image}
                alt={data.title}
                width={300}
                height={300}
                // layout="responsive" 
                // objectFit="contain"
            />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default IdEvents