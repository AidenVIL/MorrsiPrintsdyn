import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../supabaseClient';

function AuthPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '4rem', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <h2>Login / Signup</h2>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={['google']}
        theme="dark"
      />
    </div>
  );
}

export default AuthPage;
