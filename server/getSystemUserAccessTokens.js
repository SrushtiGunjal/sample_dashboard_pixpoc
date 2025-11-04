/**
 * getSystemUserAccessTokens.js
 * Fetch system user access tokens for a given business ID
 * Node 18+ (uses global fetch)
 */

export async function getSystemUserAccessTokens(clientBusinessId, accessToken, apiVersion = 'v24.0') {
  if (!clientBusinessId) throw new Error('clientBusinessId is required');
  if (!accessToken) throw new Error('accessToken is required');

  const url = `https://graph.facebook.com/${apiVersion}/${clientBusinessId}/system_user_access_tokens?access_token=${encodeURIComponent(accessToken)}`;
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

// Placeholder for generating new tokens (requires app secret, permissions, and POST)
// See Facebook docs for /system_user_access_tokens POST usage