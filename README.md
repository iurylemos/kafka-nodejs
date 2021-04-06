# Micro-serviço com Node.JS

- Utilizando Kafka;
- Utilizando Node;

## Aplicações

- API Principal: (Station);
- Geração de certificado;

## Fluxo

- API Principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta (síncrona/assíncrona);

Se conseguir síncrona/assíncrona:

- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;

## O que sabemos?

- Fazer comunicação de dois serviços usando REST (latência)
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, Netflix, Paypal;