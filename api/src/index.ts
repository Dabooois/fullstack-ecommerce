// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { validateData } from "./middleware/validationMiddleware";
import { UserRegistrationSchema } from "./schemas/userSchema";
import { registerUser } from "./controller/userController";
import userRouter from "./routes/userRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use('/register', validateData(UserRegistrationSchema), userRouter)

app.get("/:id", (req: Request, res: Response) => {

  res.send(`hello world User: ${req.params.id}`);
});



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});