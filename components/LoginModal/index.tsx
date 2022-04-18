import {
  FormHolder,
  ModalBody,
  LoginForm,
  FormControl,
  SignUpButton,
  ExitButton,
} from "./style";
import { resetPassword } from "../../firebaseFunctions/index";
import React, { FC, FormEvent, useState } from "react";
import { loginUser } from "../../firebaseFunctions/index";

const LoginModal: FC<{ isModalOpen: boolean; onClose: () => void }> = ({
  isModalOpen,
  onClose,
}) => {
  const labelText2: string = "Enter your E-mail";
  const labelText: string = "Enter your password";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await loginUser(username, password);
      setUsername("");
      setPassword("");
      alert(`Succesfully Logged In! as ${username}`);
      onClose();
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function handleSendResetPasswordEmail() {
    if (!username) {
      alert("Missing username!");
      return;
    }
    try {
      await resetPassword(username);
      alert("Send the password reset!");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      {isModalOpen && (
        <ModalBody>
          <h1>Login Please</h1>
          <ExitButton onClick={onClose}>X</ExitButton>
          <FormHolder>
            <LoginForm onSubmit={handleSubmit}>
              <FormControl>
                <input
                  type="email"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>
                  {Array.from(labelText2).map(
                    (letter: string, index: number) => {
                      return (
                        <span
                          key={index}
                          style={{
                            transitionDelay: `${index * 40}ms`,
                          }}
                        >
                          {letter}
                        </span>
                      );
                    }
                  )}
                </label>
              </FormControl>
              <FormControl>
                <input
                  type="password"
                  // required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>
                  {Array.from(labelText).map(
                    (letter: string, index: number) => {
                      return (
                        <span
                          key={index}
                          style={{
                            transitionDelay: `${index * 40}ms`,
                          }}
                        >
                          {letter}
                        </span>
                      );
                    }
                  )}
                </label>
              </FormControl>
              <SignUpButton
                type="submit"
                onClick={() => loginUser(username, password)}
              >
                Login
              </SignUpButton>
              <SignUpButton
                type="button"
                onClick={() => handleSendResetPasswordEmail()}
              >
                Reset Password
              </SignUpButton>
            </LoginForm>
          </FormHolder>
        </ModalBody>
      )}
    </>
  );
};

export default LoginModal;
