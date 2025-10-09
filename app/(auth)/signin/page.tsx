import { LoginGoogleButton } from "@/components/login-button";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Signin",
};

const SigninPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoginGoogleButton />
    </div>
  );
};

export default SigninPage;
