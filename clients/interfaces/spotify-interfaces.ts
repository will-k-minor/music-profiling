export interface SpotifyAuthRequest {
  grant_type: string;
  // client_id: string;
  // client_secret: string;
}

export interface SpotifyAuthResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
}

export interface MinSpotifyPlaylistResponse {
  id: string;
  description: string;
  href: string;
  name: string;
}
