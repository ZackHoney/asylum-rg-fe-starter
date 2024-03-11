import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      type="default"
      className="btn btn-primary btn-block"
      style={{
        backgroundColor: '#404C4A',
        color: '#FFFFFF',
        display: 'flex',
        alignSelf: 'center',
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;
