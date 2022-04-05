import { Auth } from "firebase/auth";
import type { NextPage } from "next";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { auth } from "../firebaseFunctions";
const Home: NextPage = () => {
  const [user, setUser] = useState<Auth | null>(null);

  return (
    <div>
      <LoginForm existingUser={user} />
    </div>
  );
};

export default Home;
