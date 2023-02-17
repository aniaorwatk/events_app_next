import { useRef, useState } from "react";
import {useRouter} from "next/router"
import style from "./events.module.scss";
import Image from "next/image";

const IdEvents = ({ data }) => {
    const inputEmail = useRef()
    const router = useRouter()

    const onSubmit = async (e) => {

        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;
        try {
            const response = await fetch("/api/email-registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: emailValue, eventId })
            });
            if (!response.ok) throw new Error(`Error: ${response.starus}`)
            const data = await response.json();
            console.log(data)

        } catch (e) {

        }

    }

    return (
        <div className={style.idEvents}>

            <h1>{data.title}</h1>
            <Image
                priority
                src={data.image}
                alt={data.title}
                width={300}
                height={300}
            />
            <p>{data.description}</p>

            <form onSubmit={onSubmit} className={style.email_registration}>
                <label>Get Register for this event</label>
                <input ref={inputEmail} className={style.input} id="email" type="email" placeholder="Please insert your email" />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default IdEvents