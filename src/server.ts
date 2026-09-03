import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Heyy whats up??\n Welcome to 'Study Planner API!'");
});

app.listen(5050, () => {
    console.log("Server runing on port 5000")
});

