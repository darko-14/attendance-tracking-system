import Attendee from '../models/attendee';

export class AttendanceService {
    async createAttendee(data: {
        name: string;
        email: string;
        image: string;
        type: 'ENTRY' | 'EXIT';
    }) {
        const attendee = new Attendee({
            ...data,
            timestamp: new Date(),
        });

        await attendee.save();
        return attendee;
    }

    async getAllAttendees() {
        return Attendee.find().sort({ timestamp: -1 });
    }
}
