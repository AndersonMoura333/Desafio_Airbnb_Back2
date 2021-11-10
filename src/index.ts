import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
const port = 1234;
const server = app.listen(port, () => {
    console.log(`Express rodando na porta ${port}`);
});
app.get('/', (req, res) => {
    res.json({
        "cep": "01001-000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "ibge": "3550308",
        "gia": "1004",
        "ddd": "11",
        "siafi": "7107"
    });
});

