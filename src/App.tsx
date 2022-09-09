import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { auth } from "./lib/firebase";
// console.log("app", app);
import { login, logout, register } from "./api/auth";
import "./App.css";
import { useUser } from "./hooks/use-user";
function App() {
  const [count, setCount] = useState(0);
  const { currentUser, isAuth } = useUser();
  console.log("user", currentUser);
  // React.useEffect(() => {

  // }, [isAuth]);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {!isAuth ? (
          <>
            <button
              onClick={async () => {
                const res = await register({
                  email: "dr1tch@example.com",
                  password: "1HRMBD99DYH",
                });
                console.log("res :>> ", res);
              }}
            >
              Register
            </button>
            <button
              onClick={async () => {
                const res = await login({
                  email: "dr1tch@example.com",
                  password: "1HRMBD99DYH",
                });
                console.log("res :>> ", res);
              }}
            >
              login
            </button>
          </>
        ) : (
          <button onClick={async () => await logout()}>Logout</button>
        )}
        <p>{isAuth ? "Authenticated" : "Not Authenticated"}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
