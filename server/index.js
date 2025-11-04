#!/usr/bin/env node
/**
 * server/index.js
 * Clean Express example that wires helper modules for Facebook Graph API
 * - Requires Node 18+ (global fetch). If using older Node, install node-fetch and adjust imports.
 * - Create a server/.env file with FB_SYSTEM_USER_TOKEN, FB_APP_ID, FB_APP_SECRET (when needed)
 */

import express from 'express';
import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { getClientBusinessId } from './getClientBusinessId.js';
import { getSystemUserAccessTokens } from './getSystemUserAccessTokens.js';
import { postSystemUserAccessToken } from './postSystemUserAccessToken.js';
import { exchangeCodeForAccessToken } from './exchangeCodeForAccessToken.js';

// Get directory name for ES module
const __dirname = dirname(fileURLToPath(import.meta.url));
// Load .env from same directory as this file
dotenv.config({ path: `${__dirname}/.env` });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// GET /fb/client-business-id
// Uses a server-side token (FB_SYSTEM_USER_TOKEN) to call /me?fields=client_business_id
app.get('/fb/client-business-id', async (req, res) => {
  try {
    const token = process.env.FB_SYSTEM_USER_TOKEN;
    const apiVersion = process.env.FB_API_VERSION || 'v24.0';
    if (!token) return res.status(500).json({ error: 'FB_SYSTEM_USER_TOKEN not configured' });

    const data = await getClientBusinessId(token, apiVersion);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'unknown error', details: err.body || null });
  }
});

// GET /:client_business_id/system_user_access_tokens
// Fetch system user access tokens for a business (server-side token required)
app.get('/:client_business_id/system_user_access_tokens', async (req, res) => {
  try {
    const token = process.env.FB_SYSTEM_USER_TOKEN;
    const apiVersion = process.env.FB_API_VERSION || 'v24.0';
    const { client_business_id } = req.params;
    if (!token) return res.status(500).json({ error: 'FB_SYSTEM_USER_TOKEN not configured' });
    if (!client_business_id) return res.status(400).json({ error: 'client_business_id required' });

    const data = await getSystemUserAccessTokens(client_business_id, token, apiVersion);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'unknown error', details: err.body || null });
  }
});

// POST /:client_business_id/system_user_access_tokens
// Generate or fetch a new system user access token for a business
app.post('/:client_business_id/system_user_access_tokens', async (req, res) => {
  try {
    const apiVersion = process.env.FB_API_VERSION || 'v24.0';
    const { client_business_id } = req.params;
    const { appsecret_proof, access_token, system_user_id, fetch_only } = req.body;
    if (!client_business_id) return res.status(400).json({ error: 'client_business_id required' });
    if (!appsecret_proof) return res.status(400).json({ error: 'appsecret_proof required' });
    if (!access_token) return res.status(400).json({ error: 'access_token required' });
    if (!system_user_id) return res.status(400).json({ error: 'system_user_id required' });

    const data = await postSystemUserAccessToken({
      clientBusinessId: client_business_id,
      appsecretProof: appsecret_proof,
      accessToken: access_token,
      systemUserId: system_user_id,
      fetchOnly: fetch_only !== false,
      apiVersion,
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'unknown error', details: err.body || null });
  }
});

// GET /oauth/access_token
// Proxy for exchanging client-side provided app id/secret and code (legacy / not recommended)
app.get('/oauth/access_token', async (req, res) => {
  try {
    const apiVersion = process.env.FB_API_VERSION || 'v24.0';
    const { client_id, client_secret, code } = req.query;
    if (!client_id) return res.status(400).json({ error: 'client_id required' });
    if (!client_secret) return res.status(400).json({ error: 'client_secret required' });
    if (!code) return res.status(400).json({ error: 'code required' });

    const data = await exchangeCodeForAccessToken({
      clientId: client_id,
      clientSecret: client_secret,
      code,
      apiVersion,
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'unknown error', details: err.body || null });
  }
});

// POST /oauth/exchange
// Secure server-side exchange: accepts { code, redirect_uri } and uses FB_APP_ID/FB_APP_SECRET from server env
app.post('/oauth/exchange', async (req, res) => {
  try {
    const apiVersion = process.env.FB_API_VERSION || 'v24.0';
    const { code, redirect_uri } = req.body || {};
    const clientId = process.env.FB_APP_ID;
    const clientSecret = process.env.FB_APP_SECRET;
    if (!clientId || !clientSecret) return res.status(500).json({ error: 'FB_APP_ID or FB_APP_SECRET not configured on server' });
    if (!code) return res.status(400).json({ error: 'code required' });

    let url = `https://graph.facebook.com/${apiVersion}/oauth/access_token?client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}&code=${encodeURIComponent(code)}`;
    if (redirect_uri) url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;

    const result = await fetch(url, { method: 'GET' });
    const text = await result.text();
    if (!result.ok) {
      return res.status(result.status).json({ error: 'Graph API error', details: text });
    }
    try {
      const json = JSON.parse(text);
      return res.json(json);
    } catch (e) {
      return res.send(text);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'unknown error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  console.log('Endpoints:');
  console.log(' - GET /fb/client-business-id');
  console.log(' - GET /:client_business_id/system_user_access_tokens');
  console.log(' - POST /:client_business_id/system_user_access_tokens');
  console.log(' - POST /oauth/exchange');
});
