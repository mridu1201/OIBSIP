import React, { useState } from 'react';
import * as Components from './Components';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function Login() {
  const [signIn, toggle] = React.useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Signup
  const SignUp = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/register', {
        name: name,
        email: email,
        password: password,
        role: 'ADMIN',
      })
      .then((res) => {
        let err = res.data;
        console.log(res.data);
        if (err === 'Something went wrong!') {
          toast.error('Account already exists');
        }
        navigate('/home');
      });
  };

  // SignIn
  const SignIn = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/login', { email, password })
      .then((res) => {
        const { token, uid, role } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', uid);
        localStorage.setItem('role', role);
        if (token && role === 'ADMIN') {
          toast.success('Login Successful');
          navigate('/home');
        }
      })
      .catch((error) => {
        console.error('Error signing in:', error.message);
      });
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={SignUp}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Components.Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button type='submit'>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={SignIn}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button type='submit'>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default Login;
