import axios from 'axios'

const API_URL = `http://smartevent-api.tk/`

class EventService {

    // Methods Put corresponding to the items of the user.
    putEvent(event) {
        return axios.put(API_URL + `event/${event.id}`,
            {
                title: event.title,
                eventDate: event.date,
                description: event.description,
                address: event.address,
                organizer: event.organizer,
                type: event.type
            },
            { headers: authHeader() }
        )
    }

    // Methods Put corresponding to the items of the user.
    postEvent(event) {
        return axios.post(API_URL + `event`,
            {
                title: event.title,
                eventDate: event.date,
                description: event.description,
                address: event.address,
                organizer: event.organizer,
                type: event.type
            },
            { headers: authHeader() },
        )
    }
}

export default new EventService()