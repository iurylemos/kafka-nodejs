import express from 'express';

const routes = new express.Router();

routes.post('/certifications', async (req, res) => {
    // [ Chamar micro serviço ]
    console.log(req.producer);

    const message = {
        user: { id: '1', name: 'Claudio Iury' },
        course: "Kafka com NodeJS",
        grade: 5
    }

    const producer = req.producer;

    await producer.send({
        topic: 'issue-certificate',
        messages: [
            {
                value: JSON.stringify(message)
            },
        ],
    });

    return res.json({ ok: true });
});

export { routes };