import React from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

export const LoginGoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button>signin</Button>
    </form>
  );
};
