import express from 'express';
import { Kafka } from 'kafkajs';
import { routes } from './routes';

const app = express();

// [ Faz conexão com o kafka ]

const kafka = new Kafka({
    clientId: 'api',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();

// [ Criando middleware ]
// [ Disponilizar o producer para todas as rotas ]
app.use((req, res, next) => {
    req.producer = producer;

    return next();
});

app.use(routes);

const run = async () => {
    await producer.connect();

    app.listen(3333);
}

run().catch(console.error);