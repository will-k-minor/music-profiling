import express, { Request, Response, Router } from "express";

const userRouter: Router = Router();

/* GET users listing. */
userRouter.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

export default userRouter;
