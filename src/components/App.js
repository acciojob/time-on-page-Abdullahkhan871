import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [mount, setMount] = useState(0);

  useEffect(() => {
    let int = setInterval(() => {
      setMount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <div>
      <p>You\'ve been on this page for {mount} seconds.</p>
    </div>
  );
};

export default App;
