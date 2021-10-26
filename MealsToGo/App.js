import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation/index";
import * as firebase from "firebase";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Credentials } from "./src/config/config.env";

// You must create a config file in ./src/config/config.env.js to use these credentials
const firebaseConfig = {
  apiKey: Credentials.apiKey,
  authDomain: Credentials.authDomain,
  projectId: Credentials.projectId,
  storageBucket: Credentials.storageBucket,
  messagingSenderId: Credentials.messagingSenderId,
  appId: Credentials.appId,
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default function App() {
  // Loading in fonts here
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // ThemeProvider: See that we are wrapping our components in App.js with a ThemeProvider
  // component that will allow us to pass theme values globally instead of following
  // the component chain
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
