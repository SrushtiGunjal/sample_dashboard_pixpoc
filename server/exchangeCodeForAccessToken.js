/**
 * exchangeCodeForAccessToken.js
 * Exchange Facebook OAuth code for a System User access token
 */

export async function exchangeCodeForAccessToken({
  clientId,
  clientSecret,
  code,
  apiVersion = 'v24.0',
}) {
  if (!clientId) throw new Error('client_id is required');
  if (!clientSecret) throw new Error('client_secret is required');
  if (!code) throw new Error('code is required');

  const url = `https://graph.facebook.com/${apiVersion}/oauth/access_token` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&client_secret=${encodeURIComponent(clientSecret)}` +
    `&code=${encodeURIComponent(code)}`;

  const res = await fetch(url, { method: 'GET' });
  if (!res.ok) {
    const text = await res.text();
    const err = new Error(`Facebook API error ${res.status}: ${text}`);
    // attach status and body for easier debugging
    // @ts-ignore
    err.status = res.status;
    // @ts-ignore
    err.body = text;
    throw err;
  }
  return res.json();
}