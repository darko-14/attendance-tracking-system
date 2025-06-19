import Fastify from 'fastify';
import cors from '@fastify/cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { attendanceRoutes } from './routes/attendanceRoutes';

dotenv.config();

const app = Fastify({ logger: true });

app.register(cors, { origin: '*' });
app.register(async (fastify) => {
    fastify.register(attendanceRoutes);
});

const start = async () => {
    const port: string = process.env.PORT || '3001';
    const mongoUri: string | undefined = process.env.MONGO_URI;

    if (!mongoUri) {
        app.log.error('MONGO_URI not defined in environment variables');
        process.exit(1);
    }

    try {
        await mongoose.connect('mongodb://mongo:27017/attendance');
        app.log.info('Connected to MongoDB successfully');

        await app.listen({ port: parseInt(port), host: '0.0.0.0' });
        app.log.info(`Server is running on port ${port}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start();
