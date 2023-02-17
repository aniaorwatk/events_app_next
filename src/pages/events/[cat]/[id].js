import IdEvents from "@/components/eventsComponents/idEvents";

const EventPage = ({ data }) => {
    return (
        <IdEvents data={data} />
    )
}

export default EventPage

export async function getstaticPaths() {
    const data = await import('./../../../../data/data.json');
    const allEvents = data

    const allPaths = allEvents.map(path => {
        return {
            params: {
                cat: path.city.toString(),
                id: path.id.toString()
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getServerSideProps(context) {

    const id = context?.params.id;
    const { allEvents } = await import('./../../../../data/data.json');

    const eventData = allEvents.find(ev => id === ev.id)

    return {
        props: {
            data: eventData
        }
    }
}
