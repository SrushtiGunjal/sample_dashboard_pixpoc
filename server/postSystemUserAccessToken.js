/**
 * postSystemUserAccessToken.js
 * Generate or fetch a new system user access token for a business
 * Node 18+ (uses global fetch)
 */

export async function postSystemUserAccessToken({
  clientBusinessId,
  appsecretProof,
  accessToken,
  systemUserId,
  fetchOnly = true,
  apiVersion = 'v24.0',
}) {
  if (!clientBusinessId) throw new Error('clientBusinessId is required');
  if (!appsecretProof) throw new Error('appsecret_proof is required');
  if (!accessToken) throw new Error('access_token is required');
  if (!systemUserId) throw new Error('system_user_id is required');

  const url = `https://graph.facebook.com/${apiVersion}/${clientBusinessId}/system_user_access_tokens` +
    `?appsecret_proof=${encodeURIComponent(appsecretProof)}` +
    `&access_token=${encodeURIComponent(accessToken)}` +
    `&system_user_id=${encodeURIComponent(systemUserId)}` +
    `&fetch_only=${fetchOnly ? 'true' : 'false'}`;

  const res = await fetch(url, { method: 'POST' });
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