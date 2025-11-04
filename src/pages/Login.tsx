import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

type FBStatus = "unknown" | "connected" | "not_authorized";

export default function Login() {
  const [fbAvailable, setFbAvailable] = useState<boolean>(false);
  const [status, setStatus] = useState<FBStatus>("unknown");
  const [user, setUser] = useState<any>(null);
  const [configId, setConfigId] = useState<string>("");
  // Login Dialog generator state
  const [appId, setAppId] = useState<string>("");
  const [redirectUri, setRedirectUri] = useState<string>("");
  const [stateParam, setStateParam] = useState<string>("");
  const [responseType, setResponseType] = useState<string>("code");
  const [scope, setScope] = useState<string>("");
  // Utility to generate Facebook Login Dialog URL
  const loginDialogUrl = appId && redirectUri
    ? `https://www.facebook.com/v24.0/dialog/oauth?client_id=${encodeURIComponent(appId)}&redirect_uri=${encodeURIComponent(redirectUri)}${stateParam ? `&state=${encodeURIComponent(stateParam)}` : ""}${responseType ? `&response_type=${encodeURIComponent(responseType)}` : ""}${scope ? `&scope=${encodeURIComponent(scope)}` : ""}`
    : "";

  useEffect(() => {
    // Check if FB SDK object exists
    const checkFB = () => {
      // @ts-ignore
      if (window.FB) {
        setFbAvailable(true);
        // @ts-ignore
        window.FB.getLoginStatus((response: any) => {
          handleStatusResponse(response);
        });
      } else {
        setFbAvailable(false);
      }
    };

    // Try immediately and also after a short delay in case SDK loads slightly later
    checkFB();
    const t = setTimeout(checkFB, 1000);
    return () => clearTimeout(t);
  }, []);

  const handleStatusResponse = (response: any) => {
    if (!response) {
      setStatus("unknown");
      setUser(null);
      return;
    }

    if (response.status === "connected") {
      setStatus("connected");
      // fetch basic profile info
      // @ts-ignore
      window.FB.api("/me", { fields: "id,name,email" }, (me: any) => {
        setUser(me);
      });
    } else if (response.status === "not_authorized") {
      setStatus("not_authorized");
      setUser(null);
    } else {
      setStatus("unknown");
      setUser(null);
    }
  };

  const checkLoginStatus = () => {
    // @ts-ignore
    window.FB?.getLoginStatus((resp: any) => handleStatusResponse(resp));
  };

  const loginWithFacebook = () => {
    // Recommended: use config_id for User access token configuration
    // @ts-ignore
    window.FB?.login(
      function(response) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          // @ts-ignore
          window.FB.api('/me', function(apiResponse) {
            console.log('Good to see you, ' + apiResponse.name + '.');
            setUser(apiResponse);
            setStatus('connected');
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
          setUser(null);
          setStatus('unknown');
        }
      },
      {
        config_id: configId || undefined,
        // scope can be omitted; config_id is preferred
      }
    );
  };

  const logoutFromFacebook = () => {
    // @ts-ignore
    window.FB?.logout((resp: any) => handleStatusResponse(resp));
  };

  const [shareUrl, setShareUrl] = useState<string>("https://your.domain/example");

  const shareDialog = () => {
    // @ts-ignore
    if (!window.FB) return alert('FB SDK not loaded');
    // Open the FB Share dialog using FB.ui
    // method: 'share' will show the standard share dialog for the provided href
    // You can also use 'share_open_graph' for Open Graph shares.
    // @ts-ignore
    window.FB.ui(
      {
        method: 'share',
        href: shareUrl,
      },
      function(response) {
        if (response && !response.error_message) {
          console.log('Share dialog success', response);
        } else {
          console.log('Share dialog error or cancelled', response);
        }
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto py-12 space-y-6">
      <h1 className="text-3xl font-bold">Login</h1>

      {!fbAvailable && (
        <Alert>
          <AlertDescription>
            The Facebook SDK is not available on this page yet. Make sure you set <code>VITE_FB_APP_ID</code> and
            that the SDK script is loaded in <code>index.html</code>. The SDK is loaded asynchronously and may take a
            moment to become available.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-40">FB SDK status:</div>
          <div className="flex-1">{fbAvailable ? "Loaded" : "Not loaded"}</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-40">Login state:</div>
          <div className="flex-1">{status}</div>
        </div>

        {user && (
          <div className="p-4 border rounded-md">
            <div className="font-medium">Signed in as</div>
            <div>{user.name}</div>
            <div className="text-sm text-muted-foreground">ID: {user.id}</div>
          </div>
        )}



        <div className="space-y-2">
          <label className="block text-sm font-medium mb-1">Facebook config_id (User access token config):</label>
          <input
            type="text"
            value={configId}
            onChange={e => setConfigId(e.target.value)}
            placeholder="Paste your config_id here"
            className="border rounded px-2 py-1 w-full mb-2"
          />
        </div>

        <div className="mt-8 p-4 border rounded-md bg-muted/30">
          <h2 className="text-lg font-semibold mb-2">Facebook Login Dialog URL Generator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
            <input
              type="text"
              value={appId}
              onChange={e => setAppId(e.target.value)}
              placeholder="App ID (client_id)"
              className="border rounded px-2 py-1"
            />
            <input
              type="text"
              value={redirectUri}
              onChange={e => setRedirectUri(e.target.value)}
              placeholder="Redirect URI (redirect_uri)"
              className="border rounded px-2 py-1"
            />
            <input
              type="text"
              value={stateParam}
              onChange={e => setStateParam(e.target.value)}
              placeholder="State (state)"
              className="border rounded px-2 py-1"
            />
            <input
              type="text"
              value={scope}
              onChange={e => setScope(e.target.value)}
              placeholder="Scope (optional)"
              className="border rounded px-2 py-1"
            />
            <select
              value={responseType}
              onChange={e => setResponseType(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="code">code (server exchange)</option>
              <option value="token">token (client only)</option>
              <option value="code token">code token (both)</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">Generated Login Dialog URL:</label>
            <input
              type="text"
              value={loginDialogUrl}
              readOnly
              className="border rounded px-2 py-1 w-full font-mono text-xs"
            />
          </div>
          {loginDialogUrl && (
            <a
              href={loginDialogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/80"
            >
              Open Login Dialog
            </a>
          )}
          <div className="text-xs text-muted-foreground mt-2">
            <ul className="list-disc ml-4">
              <li><b>client_id</b>: Your Facebook App ID</li>
              <li><b>redirect_uri</b>: Where Facebook redirects after login (must be whitelisted in your app settings)</li>
              <li><b>state</b>: Custom string for CSRF protection, returned unchanged</li>
              <li><b>response_type</b>: <code>code</code> for server exchange, <code>token</code> for client, <code>code token</code> for both</li>
              <li><b>scope</b>: Comma/space separated permissions (optional, not recommended with config_id)</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={checkLoginStatus} variant="outline">
            Check status
          </Button>
          <Button onClick={loginWithFacebook}>Login with Facebook</Button>
          <Button variant="destructive" onClick={logoutFromFacebook}>
            Logout
          </Button>
        </div>

        <div className="mt-4 p-3 border rounded">
          <label className="block text-sm font-medium mb-1">Share URL for Facebook Share Dialog</label>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={shareUrl}
              onChange={(e) => setShareUrl(e.target.value)}
              className="border rounded px-2 py-1 flex-1"
            />
            <Button onClick={shareDialog}>Share</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Opens the Facebook Share dialog for the given URL.</p>
        </div>

        {/* Example: Facebook login button with config_id (User access token config)
        <fb:login-button config_id="<CONFIG_ID>" onlogin="checkLoginState();">
        </fb:login-button>
        */}

        <p className="text-sm text-muted-foreground">
          Note: If you set <code>status: true</code> in the <code>FB.init</code> call (in your SDK snippet), the SDK will
          automatically try to get the user's login status right after initialization which can speed up login checks.
          Otherwise use <code>FB.getLoginStatus</code> as this page does.
        </p>
      </div>
    </div>
  );
}
