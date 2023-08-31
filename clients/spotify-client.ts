import axios, { AxiosInstance } from 'axios';
import {
  MinSpotifyPlaylistResponse,
  SpotifyAuthRequest,
  SpotifyAuthResponse,
} from './interfaces';
import { spotifyClientId, spotifyClientSecret } from '../config';

const spotifyClient = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  timeout: 1000,
  headers: {
    Authorization: `nunya`,
  },
});

const authenticateWithSpotify = () => {
  const body: SpotifyAuthRequest = {
    grant_type: 'client_credentials',
    // client_id: spotifyClientId ?? 'client_id',
    // client_secret: spotifyClientSecret ?? 'client_secret',
  };

  let auth: Buffer | string = Buffer.from(
    spotifyClientId + ':' + spotifyClientSecret
  );

  console.table(body);
  console.log(spotifyClientId, spotifyClientSecret);
  console.log(auth);

  auth = auth.toString('base64');

  axios
    .post('https://accounts.spotify.com/api/token', body, {
      headers: {
        Authorization: 'Basic ' + auth,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((res) => {
      //process Auth token
      const authResponse: SpotifyAuthResponse = res.data;
      console.warn('Authenticated against Spotify');
      spotifyClient.defaults.headers[
        'Authorization'
      ] = `Bearer  ${authResponse.access_token}`;

      console.log(authResponse.access_token);
    })
    .catch((err) => {
      console.error('SOMETHING WENT WRONG CREATING THE SPOTIFY CLIENT');
      console.log(JSON.stringify(err));
    });
};

authenticateWithSpotify();

export const getMyPlaylists = () => {
  return spotifyClient
    .get(`/me/playlists`)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        return res.data as MinSpotifyPlaylistResponse;
      }
    })
    .catch((err) => {
      console.log(JSON.stringify(err.response.data));
    });
};

export const getArtist = (artistId: string) => {
  console.log(artistId);
  return spotifyClient
    .get(`/artists/${artistId}`)
    .then((res) => console.log(res.data))
    .catch((err) => {
      console.log(JSON.stringify(err.response.data));
    });
};
