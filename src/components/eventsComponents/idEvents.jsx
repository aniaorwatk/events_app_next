import { useRef, useState } from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import style from "./events.module.scss";

const IdEvents = ({ data }) => {
    const inputEmail = useRef()
    const router = useRouter()
    const [message, setMessage]=useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!emailValue.match(validRegex)){
    setMessage('Email address is invalid, please enter a valid one.')
}
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
            setMessage(data.message)
            inputEmail.current.value = "";
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
                height={350}
                style={{
                    minWidth: '60%',
                    height: 'auto',
                  }}
            />
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className={style.email_registration}>
                <label>Get Register for this event</label>
                <input ref={inputEmail} className={style.input} id="email" type="text" placeholder="Please insert your email" />
                <button type="submit">Submit</button>
            </form>
            <p className={style.errorMessage}>{message}</p>
        </div>
    )
}

export default IdEvents