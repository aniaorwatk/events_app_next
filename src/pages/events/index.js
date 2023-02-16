import Image from "next/image"
import Link from "next/link"

const EventsPage = ({ data }) => {

    const eventsCities = data.map(ev => {
        return (
            <Link key={ev.id} href={`/events/${ev.id}`} passHref>
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
        <div>
            <h1>Event Page</h1>
            {eventsCities}
        </div>
    )
}

export default EventsPage

export async function getStaticProps() {
    const { events_categories } = await import('./../../../data/data.json');
    console.log(events_categories)
    return {
        props: {
            data: events_categories
        }
    }
}
