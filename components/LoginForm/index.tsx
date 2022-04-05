import React, { FC, FormEvent, useState } from "react";
import { FormHolder, Header, LogoHolder, Form, ButtonBox } from "./style";
import { loginUser } from "../../firebaseFunctions/index";
import { Auth } from "firebase/auth";

const LoginForm: FC<{ existingUser: Auth | null }> = ({ existingUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await loginUser(username, password);
      setUsername("");
      setPassword("");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <Header>
      <LogoHolder>
        <h1>
          TODO <span>APP</span>
        </h1>
      </LogoHolder>

      <FormHolder>
        <Form onSubmit={handleSubmit}>
          <label>
            Enter your Email:
            <input
              type="email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </label>
          <label>
            Enter your password:
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <ButtonBox>
            <button>Login</button>
            <button type="button">Reset Password</button>
          </ButtonBox>
        </Form>
      </FormHolder>
    </Header>
  );
};

export default LoginForm;
