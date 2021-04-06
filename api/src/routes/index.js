import express from 'express';

const routes = new express.Router();

routes.post('/certifications', async (req, res) => {
    // [ Chamar micro serviço ]
    console.log(req.producer);

    return res.json({ ok: true })
});

export { routes };