import Fastify from 'fastify';

const app = Fastify({ logger: true });

const start = async () => {
    const port: string = process.env.PORT || '3001';
    try {
        await app.listen({ port: parseInt(port) });
        app.log.info(`Server listening on port: ${port}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start();