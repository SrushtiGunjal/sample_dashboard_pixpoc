# Server example: fetch Facebook client_business_id

This small example shows how to call the Facebook Graph API `/me?fields=client_business_id` endpoint from a server using a Business System User token (generated in Business Manager).

Files
- `index.js` - minimal Express server exposing `GET /fb/client-business-id`
- `getClientBusinessId.js` - small helper to call the Graph API
- `.env.example` - example env with `FB_SYSTEM_USER_TOKEN` and `FB_API_VERSION`

Quick start

1. Copy the example env and fill your system user token:

```bash
cd server
cp .env.example .env
# edit .env and set FB_SYSTEM_USER_TOKEN
```

2. Install dependencies and run the server (Node 18+ recommended):

```bash
npm init -y
npm install express dotenv
node index.js
```

3. Call the endpoint (replace port if you changed it):

```bash
curl "http://localhost:3000/fb/client-business-id"
```

The server will respond with JSON like:

```json
{
  "client_business_id": "<CLIENT_BUSINESS_ID>",
  "id": "<APP_SCOPED_ID>"
}
```

Notes
- This example expects a system user token stored in `FB_SYSTEM_USER_TOKEN`. Generate that in Business Manager -> System Users -> Generate New Token.
- Do not commit real tokens to source control. Store them in a secure place or secrets manager in production.
- If your Node runtime doesn't provide `fetch` (older Node), install `node-fetch` and import it in `getClientBusinessId.js`.
