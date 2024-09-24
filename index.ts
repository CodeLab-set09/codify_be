import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { mainApp } from "./main";
import { dbConfig } from "./utils/dbConfig";
import session from "express-session";
import cookieParser from "cookie-parser";
const app: Application = express();
const PORT: number = 2277;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "https://just-codify.web.app/");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({ origin: ["http://localhost:5174", "https://just-codify.web.app/"] })
);

app.use(express.json());
app.use(cookieParser("codifyPlatform"));

app.set("trust proxy", 1);
app.use(
  session({
    secret: "codifyPlatform",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 3600 },
  })
);

mainApp(app);

app.listen(process.env.PORT || PORT, () => {
  console.clear();

  dbConfig();
});
