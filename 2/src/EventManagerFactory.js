import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory {
    static create(events, types) {

            for (let i = 0; i < events.length; i++) {
                const Seconds = events[i].second + "000"
                const typesEvents = types.indexOf(events[i].type);
                if (typesEvents !== -1) {
                    setTimeout(function () {
                        console.log('At second ' + events[i].second + ":" + ' { type: "' + events[i].type + '", message: "' + events[i].message + '"}');

                    }, Seconds)

                }

            }
        

        return new EventManager();
    }
};