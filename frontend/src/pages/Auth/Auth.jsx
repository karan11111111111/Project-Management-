import "./Auth.css";
import { Button } from "@/components/ui/button";

import SignupForm from "./signup/SignupForm";
import LoginForm from "./login/login";
import { useState } from "react";

const Auth = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="loginContainer">
      <div className="loginBox">
    <div className="w-full space-y-5">
        {active ? <SignupForm /> : <LoginForm />}

            <div className="flex items-center justify-center">
              <span>already have account ? </span>
              <Button onClick={() => setActive(!active)} variant="ghost" className="ml-2">
                {active ? "signin" : "signup"}
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Auth;
