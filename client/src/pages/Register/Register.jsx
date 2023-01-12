import './register.scss';
import logo from '../../assets/logo.png';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post('auth/register', { email, username, password });
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="Netflix Logo" />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="Username" ref={usernameRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
