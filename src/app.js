import React from "react";
import { createRoot } from "react-dom/client";

import { Counter } from "./components/counter/counter";

const App = () => {
  return (
    <div>
      <div>Döner</div>
      <Counter start={0} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
