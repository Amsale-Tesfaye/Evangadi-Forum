import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../axiosConfig";


function Login() {
  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    if (!emailValue || !passValue) {
      alert("please provide all required information");
      return;
    }
    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passValue,
      });
      alert("login sucessful. ");

      localStorage.setItem('token', data.token);

     // navigate("/");
      console.log(data);
    } catch (error) {
      
      alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Email :---</span>
          <input ref={emailDom} type="email" placeholder="Email" />
        </div>

        <br />

        <div>
          <span>Password :---</span>
          <input ref={passwordDom} type="password" placeholder="Password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register"> register</Link>
    </section>
  );
}

export default Login;
