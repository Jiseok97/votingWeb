import React, { useState } from "react";
import AppRouter from "Router";
import { authService } from "myBase";

function TestApp() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = uesState(authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default TestApp;
