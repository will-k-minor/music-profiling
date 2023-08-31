import { Request, Response, Router } from 'express';
import spotifyRouter from './spotify';

const indexRouter: Router = Router();

/* GET home page. */
indexRouter.get('/', function (req: Request, res: Response, next) {
  res.send('Express + TypeScript Server');
});

indexRouter.use('/spotify', spotifyRouter);
// indexRouter.use('/chatGPT', interact);

export default indexRouter;
