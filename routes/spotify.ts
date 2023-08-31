/**
 * Dedicated to using routes to forward requests to Spotify API
 */

// GET Spotify Playlist from ID

// SEARCH Spotify Playlists based on Search Term

// GET Spotify Playlists that I like

import { Request, Response, Router } from 'express';
import { getArtist, getMyPlaylists } from '../clients/spotify-client';

const spotifyRouter: Router = Router();

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
