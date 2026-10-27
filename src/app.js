import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {    
        id: 1,
        titulo: "Programando em JAVA"
    },
    {
        id: 2,
        titulo: "Programando em JS"
    }
];

app.get("/", (req, res) => {
    res.status(200).send("Olá, Mundo");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros); 
});

export default app;