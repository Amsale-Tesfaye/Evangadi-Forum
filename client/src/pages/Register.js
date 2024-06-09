
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';


function Register() {
  const navigate = useNavigate();
    const usernameDom = useRef();
    const firstnameDom = useRef();
    const lastnameDom = useRef();
    const emailDom = useRef();
    const passwordDom = useRef();

  async function handleSubmit (e) {
    e.preventDefault();
    const usernameValue = usernameDom.current.value;
    const firstValue = firstnameDom.current.value;
    const lastValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstValue ||
      !lastValue ||
      !emailValue ||
      !passValue 
    
    ) {
      alert('please provide all required information');
      return;
    }
      try {
        await axios.post("/users/register", {
          username: usernameValue,
          firstname: firstValue,
          lastname: lastValue,
          email: emailValue,
          password: passValue,
        });
        alert('register sucessful. Please login'); 
        navigate('/login');

      } catch (error) {
        alert('something went wrong!')
        console.log(error.response);
      }
 }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Username :---</span>
          <input ref={usernameDom} type="text" placeholder="username" />
        </div>

        <br />

        <div>
          {/* <span>First name :---</span>
          <input type="text" placeholder="First name" /> */}
          <span>First name :---</span>
          <input ref={firstnameDom} type="text" placeholder="First name" />
        </div>

        <br />

        <div>
          <span>Last name :---</span>
          <input ref={lastnameDom} type="text" placeholder="Last name" />
        </div>

        <br />

        <div>
          <span>Email :---</span>
          <input ref={emailDom} type="email" placeholder="Email" />
        </div>

        <br />

        <div>
          <span>Password :---</span>
          <input ref={passwordDom} type="password" placeholder="Password" />
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to={"/login"}> Login </Link>
    </section>
  );
  
}

export default Register