import { FastifyReply, FastifyRequest } from 'fastify';
import { AttendanceService } from '../services/attendanceService';

const attendanceService = new AttendanceService();

export class AttendanceController {

    async createAttendee(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { name, email, image, type } = req.body as {
                name: string;
                email: string;
                image: string;
                type: 'ENTRY' | 'EXIT';
            };

            console.log('-------------req.body', req.body);

            const attendee = await attendanceService.createAttendee({ name, email, image, type });

            return reply.status(201).send(attendee);
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ message: 'Internal Server Error' });
        }
    }

    async getAllAttendees(req: FastifyRequest, reply: FastifyReply) {
        try {
            const attendees = await attendanceService.getAllAttendees();

            return reply.status(200).send(attendees);
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ message: 'Internal Server Error' });
        }
    }
}
