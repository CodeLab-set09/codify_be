import { Application, NextFunction, Request, Response } from "express";
import user from "./router/userRouter";
import blog from "./router/blogRouter";
import typescript from "./router/typescriptrouter";
import html from "./router/htmlrouter";
import css from "./router/cssrouter";
import question from "./router/questionrouter";
import array from "./router/arrayrouter";
import number from "./router/numberrouter";
import loop from "./router/looprouter";
import functions from "./router/functionrouter";
import dsa from "./router/dsarouter";
import react from "./router/reactrouter";
import passport from "passport";
import "./utils/strategies/localStrategy";
import { iUserData } from "./utils/interfaces";
import router from "./router/userRouter";
import javascript from "./router/jsRouter";

export const mainApp = async (app: Application) => {
  try {
    app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, PUT, PATCH, POST, DELETE"
      );
      res.header("Access-Control-Allow-Headers", "Content-Type");
      next();
    });

    const defaultRoute = (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Welcome to the default route!",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error",
        });
      }
    };

    app.get("/", defaultRoute);
    app.use("/api", user);
    app.use("/api", blog);
    app.use("/api", javascript);
    app.use("/api", typescript);
    app.use("/api", html);
    app.use("/api", css);
    app.use("/api", question);
    app.use("/api", array);
    app.use("/api", number);
    app.use("/api", loop);
    app.use("/api", functions);
    app.use("/api", dsa);
    app.use("/api", react);
    // app.use("/api", router);

    // PASSPORT LOGIN
    app.post(
      "/api/login",
      async (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate(
          "local",
          (err: any, user: iUserData, info: string) => {
            if (err) return res.status(404).json({ message: err.message });
            if (!user) return res.status(404).json({ message: info });

            return res.status(200).json({
              message: "Logged in successfully!",
              data: user,
            });
          }
        )(req, res, next);
      }
    );

    // BACKUP-PASSPORT LOGIN
    app.post(
      "/api/login/start",
      passport.authenticate("local"),
      function (req: Request, res: Response, next: NextFunction) {
        // console.log(req.session);
        // console.log(req.user);

        return res.status(200).json({
          message: "Logged in successfully!",
          data: req.user,
        });
      }
    );
  } catch (error) {
    console.log("Error: ", error);
  }
};
