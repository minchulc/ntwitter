import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase"

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  /*
      사용자가 로그인 하게 되면 In App.js, onAuthStateChanged가 가장 먼저 콜 된다. 
      그러면 로그인 한 사용자에 대한 정보를 받을 수 있다. setUserObj를 사용해서 userObj에 
      사용자에 대한 정보를 저장한다. 
  */ 
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      //console.log (userObj.uid )
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return < >
    {init ? (        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />) 
        :   ("Initializing...")}

    
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
  </>
}

export default App;
