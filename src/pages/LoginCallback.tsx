import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface UserInfo {
  id: string;
  name: string;
  email?: string;
  picture?: {
    data: {
      url: string;
    };
  };
}

export default function LoginCallback() {
  const [token, setToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function exchangeCode() {
      try {
        // Get code from URL search params
        const params = new URLSearchParams(location.search);
        const code = params.get('code');
        const state = params.get('state');
        
        if (!code) {
          throw new Error('No code parameter found in URL');
        }

        // Exchange code for access token
        const exchangeResponse = await fetch('/oauth/exchange', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            code,
            redirect_uri: window.location.origin + '/login/callback'
          })
        });

        if (!exchangeResponse.ok) {
          const error = await exchangeResponse.text();
          throw new Error(`Failed to exchange code: ${error}`);
        }

        const { access_token } = await exchangeResponse.json();
        setToken(access_token);

        // Fetch user info with the token
        const userResponse = await fetch(\`https://graph.facebook.com/v24.0/me?fields=id,name,email,picture&access_token=\${access_token}\`);
        
        if (!userResponse.ok) {
          const error = await userResponse.text();
          throw new Error(`Failed to fetch user info: ${error}`);
        }

        const userData = await userResponse.json();
        setUserInfo(userData);
      } catch (err) {
        console.error('Login callback error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    exchangeCode();
  }, [location.search]);

  if (loading) {
    return (
      <Card className="w-[600px] mx-auto mt-8">
        <CardHeader>
          <CardTitle><Skeleton className="h-8 w-3/4" /></CardTitle>
          <CardDescription><Skeleton className="h-4 w-1/2" /></CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-10 w-1/3" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-[600px] mx-auto mt-8">
        <CardHeader>
          <CardTitle>Login Error</CardTitle>
          <CardDescription>There was a problem completing your login</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          <Button 
            className="mt-4" 
            onClick={() => navigate('/login')}
          >
            Back to Login
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-[600px] mx-auto mt-8">
      <CardHeader>
        <CardTitle>Login Successful</CardTitle>
        <CardDescription>You have successfully logged in with Facebook</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {userInfo && (
          <div className="flex items-start space-x-4">
            {userInfo.picture?.data?.url && (
              <img 
                src={userInfo.picture.data.url} 
                alt={userInfo.name} 
                className="rounded-full w-16 h-16"
              />
            )}
            <div className="space-y-2">
              <p className="font-medium">{userInfo.name}</p>
              {userInfo.email && (
                <p className="text-sm text-gray-500">{userInfo.email}</p>
              )}
              <p className="text-sm text-gray-500">ID: {userInfo.id}</p>
            </div>
          </div>
        )}
        <div className="pt-4">
          <Button 
            onClick={() => navigate('/dashboard')}
          >
            Continue to Dashboard
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}