"use client";

import EmptyFilter from "@/app/components/EmptyFilter";
import React from "react";

interface SignInProps {
  searchParams?: {
    callbackUrl?: string;
  };
}

export default function SignIn({ searchParams }: SignInProps) {
  const callbackUrl = searchParams?.callbackUrl;

  if (!callbackUrl) {
    return <div>Error: No callbackUrl provided</div>;
  }

  return (
    <EmptyFilter
      title="You need to be logged in to do that"
      subtitle="Please click below to login"
      showLogin
      callbackUrl={callbackUrl}
    />
  );
}
