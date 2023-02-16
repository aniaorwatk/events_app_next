import CatEvents from '@/components/eventsComponents/catEvents';

const EventsCatPage = ({ data, pageName }) => {
    return (
        <CatEvents
            data={data}
            pageName={pageName}
        />
    )
}

export default EventsCatPage

export async function getstaticPaths() {
    const { events_categories } = await import('./../../../../data/data.json');
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat: ev.id.toString()
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getServerSideProps(context) {

    const id = context?.params.cat;
    const { allEvents } = await import('./../../../../data/data.json');

    const data = allEvents.filter(ev => ev.city === id)

    return {
        props:
            { data, pageName: id }

    }
}
