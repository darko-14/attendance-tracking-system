import Fastify from 'fastify';

const app = Fastify({ logger: true });

const start = async () => {
    try {
        await app.listen({ port: 3001 });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start();