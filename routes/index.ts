import { Request, Response, Router } from 'express';
import spotifyRouter from './spotify';
import authRouter from './auth';

const indexRouter: Router = Router();

/* GET home page. */
indexRouter.get('/', function (req: Request, res: Response, next) {
  res.send('Express + TypeScript Server');
});

indexRouter.use('/spotify', spotifyRouter);
// indexRouter.use('/chatGPT', interact);

// For Auth Redirects from third party apps or internally
indexRouter.use('/auth', authRouter);

export default indexRouter;
