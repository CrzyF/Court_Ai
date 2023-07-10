import React, { useState } from "react";
import Login from "@/components/Login";
import { AuthContextProvider } from '@/context/AuthContext'
import { useAuth } from "@/context/AuthContext";
import CourtSession from "./courtsession";

function home() {

  const { user, login } = useAuth()

  return (
    <AuthContextProvider>
    { user ? <CourtSession/> : <Login/> }
    </AuthContextProvider>
  );
}

export default home
