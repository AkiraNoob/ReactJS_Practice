import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginApi from "./api/loginApi";

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  };

  const handleLogin = async () => {
    try {
      const res = await loginApi.post(input);
      console.log(res);
      alert("Login successfully");
      localStorage.setItem("accessToken", res.data?.token);
      navigate("/home");
    } catch (error) {
      alert("Login failed");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 270,
      }}
    >
      <h1>Login</h1>
      <label>
        Username
        <input
          style={{
            float: "right",
          }}
          type="text"
          name="username"
          value={input.username}
          placeholder="Enter your username"
          onChange={handleChangeInput}
        />
      </label>
      <label>
        Password
        <input
          style={{
            float: "right",
          }}
          type="password"
          name="password"
          value={input.password}
          placeholder="Enter your password"
          onChange={handleChangeInput}
        />
      </label>
      <button
        style={{
          width: "30%",
          justifySelf: "center",
          alignSelf: "center",
          marginTop: 20,
        }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
