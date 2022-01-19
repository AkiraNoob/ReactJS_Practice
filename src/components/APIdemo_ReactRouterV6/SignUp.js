import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUpApi from "./api/signUpApi";

function SignUp() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
    fullname: "",
    phone: "",
    email: "",
    address: "",
    avatar: "false",
  });

  const handleChangeInput = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  };

  const handleSignUp = async () => {
    try {
      const res = await signUpApi.post(input);
      console.log(res);
      alert("sign up failed");
      navigate("/home");
    } catch (error) {
      alert("sign up successfully");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h1>Sign Up</h1>
      <label style={{}}>
        Username:
        <input
          style={{
            float: "right",
          }}
          type="text"
          name="username"
          placeholder="Enter your username"
          value={input.username}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label style={{}}>
        Password:
        <input
          style={{
            float: "right",
          }}
          type="password"
          name="password"
          placeholder="Enter your password"
          value={input.password}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label style={{}}>
        Full Name:
        <input
          style={{
            float: "right",
          }}
          type="text"
          name="fullname"
          placeholder="Enter your full name"
          value={input.fullname}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label style={{}}>
        Phone:
        <input
          style={{
            float: "right",
          }}
          type="number"
          name="phone"
          placeholder="Enter your phone"
          value={input.phone}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label style={{}}>
        Email:
        <input
          style={{
            float: "right",
          }}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={input.email}
          onChange={handleChangeInput}
        />
      </label>
      <br />
      <label style={{}}>
        Address:
        <input
          style={{
            float: "right",
          }}
          type="text"
          name="address"
          placeholder="Enter your address"
          value={input.address}
          onChange={handleChangeInput}
        />
      </label>
      <button
        style={{
          marginTop: 30,
          width: "30%",
          justifySelf: "center",
          alignSelf: "center",
        }}
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
