import React, { FC, FormEvent, MouseEventHandler, useState } from "react";
import {
  ModalBody,
  ExitButton,
  FormHolder,
  SignUpForm,
  FormControl,
  SignUpButton,
} from "./style";
import { registerUser } from "../../firebaseFunctions/index";

const SignUpModal: FC<{
  isModalOpen: boolean;
  onClose: () => void;
}> = ({ isModalOpen, onClose }) => {
  const labelText = "Enter Your Email";
  const labelText2 = "Enter your password";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await registerUser(username, password);
      setUsername("");
      setPassword("");
      alert("User succesfully created");
      onClose();
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      {isModalOpen && (
        <ModalBody>
          <h1>Register Now</h1>
          <ExitButton onClick={onClose}>X</ExitButton>
          <FormHolder>
            <SignUpForm onSubmit={handleSubmit}>
              <FormControl>
                <input
                  type="email"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
              <FormControl>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <SignUpButton type="submit">Register</SignUpButton>
            </SignUpForm>
          </FormHolder>
        </ModalBody>
      )}
    </>
  );
};

export default SignUpModal;
