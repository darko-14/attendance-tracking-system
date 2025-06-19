import { FastifyInstance } from 'fastify';
import { AttendanceController } from '../controllers/attendanceController';

export const attendanceRoutes = (app: FastifyInstance) => {

    const controller = new AttendanceController();

    app.post('/attendance', controller.createAttendee.bind(controller));
    app.get('/attendance', controller.getAllAttendees.bind(controller));
};