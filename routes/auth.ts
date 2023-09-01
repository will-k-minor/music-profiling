import { Request, Response, Router } from 'express';

const authRouter: Router = Router();

/**
 * Auth Code Flow
 *  https://developer.spotify.com/documentation/web-api/tutorials/code-flow
 */

authRouter.get('/spotify', (req: Request, res: Response) => {
  console.log('redirected from spotify to here');
  const { code, state } = req.query;

  // store this in a MongoDB
  // when the successful write occurs, store this in a Redis Cluster for X hours
  //
});

export default authRouter;
