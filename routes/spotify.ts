/**
 * Dedicated to using routes to forward requests to Spotify API
 */

// GET Spotify Playlist from ID

// SEARCH Spotify Playlists based on Search Term

import { Request, Response, Router } from 'express';
import {
  generateSpotifyAuthRedirect,
  getArtist,
  getMyPlaylists,
} from '../clients/spotify-client';

const spotifyRouter: Router = Router();

/** User Login to allow the App to tap into their data*/

spotifyRouter.get('/login', (req: Request, res: Response) => {
  return res.redirect(generateSpotifyAuthRedirect());
});

/* GET my playlists */
/** Broken as UNAUTHORIZED.
 * Likely due to the fact that I have not authorized this app
 * to look at my playlists
 */
spotifyRouter.get(
  '/me/playlists',
  async function (req: Request, res: Response, next) {
    let { limit, offset } = req.query;
    await getMyPlaylists().then((response) => {
      res.send(response);
    });
  }
);

spotifyRouter.get(
  '/artist/:artistId',
  async function (req: Request, res: Response) {
    let { artistId } = req.params;
    console.log('hello world', artistId);
    await getArtist(artistId).then((response) => {
      res.send(response);
    });
  }
);

export default spotifyRouter;
