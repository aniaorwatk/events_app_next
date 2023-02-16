import Image from "next/image"

const EventPage = ({ data }) => {
    return (
        <div>
            <Image
                src={data.image}
                alt={data.title}
                width={1000}
                height={500}
            />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
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
