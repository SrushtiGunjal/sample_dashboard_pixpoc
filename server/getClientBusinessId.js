/**
 * getClientBusinessId.js
 * Utility to call Facebook Graph API /me?fields=client_business_id
 * Node 18+ (uses global fetch) - if using older Node, install node-fetch.
 */

export async function getClientBusinessId(accessToken, apiVersion = 'v24.0') {
  if (!accessToken) throw new Error('accessToken is required');

  const url = `https://graph.facebook.com/${apiVersion}/me?fields=client_business_id&access_token=${encodeURIComponent(
    accessToken
  )}`;

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
