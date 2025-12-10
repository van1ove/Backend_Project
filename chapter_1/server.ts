import { Request, Response } from "express";
import { Team } from "./team";
import { SportType } from "./sport-type";

// The server adress: http://localhost:1505
const express = require('express');
const app = express();

const PORT = 1505;

let data = [new Team('Real Madrid', 'Spain', SportType.FOOTBALL),];

// Middleware
app.use(express.json())

// HTTP verbs and Routes
// The method informs the nature of request and the route is a further 
// subdirectory
console.log('Server is starting...');
console.log('Almost done...')

// Website endpoints (for sending HTML files)
app.get('/', (req : Request, res: Response) => {
    res.send(`
        <body>
        <h1>Home page</h1>
        <p>${JSON.stringify(data)}</p>
        </body>
        `);

});

app.get('/categories', (req: Request, res: Response) => {
    res.send('<h1>Categories</h1><p>Football</p><p>Basketball</p><p>Tennis</p>');
})

// API endpoints (for sending JSON files)

app.get('/api/data', (req: Request, res: Response) => {
    res.send(data);
});

app.post('/api/data', (req: Request, res: Response) => {
    const newEntry = req.body;
    console.log('New entry received: ', newEntry);
    data.push(new Team(newEntry.name, newEntry.country, newEntry.sportType));
    res.sendStatus(201);
});

app.delete('/api/data/', (req: Request, res: Response) => {
    data.pop();
    res.sendStatus(204);
});

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));
