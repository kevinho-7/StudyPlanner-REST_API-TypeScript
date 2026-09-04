import express, { type Express, type Request, type Response } from 'express';
import courseRoutes from './routes/courseRoutes.js';
import { errorHandler } from './middlewares/errorMiddleware.js';

const app: Express = express();

app.use(express.json());

app.use(courseRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Heyy whats up??\n Welcome to 'Study Planner API!'");
});

app.use(errorHandler);

app.listen(5050, () => {
    console.log("Server runing on port 5050")
});

