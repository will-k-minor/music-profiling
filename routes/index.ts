import express, { Request, Response, Router } from "express";

const indexRouter: Router = Router();

/* GET home page. */
indexRouter.get("/", function (req: Request, res: Response, next) {
  res.send("Express + TypeScript Server");
});

export default indexRouter;
