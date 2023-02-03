const EventsPage = ({ data }) => {

    const eventsCities = data.map(ev => {
        return (
            <a key={ev.id} href={`/events/${ev.id}`}>
                <Image
                    src={ev.image}
                    alt={ev.title}
                    width={200}
                    height={200}
                />
                <h2>{ev.title}</h2>
            </a>
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
    const { events_categories } = await import('./../../data/data.json');
    return {
        props: {
            data: events_categories
        }
    }
}
