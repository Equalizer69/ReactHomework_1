import React, { useState } from "react";
import "./styles.css";

import Input from "./input";
import Output from "./output";

export default function App() {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    if (e.target.value.length < 51) setValue(e.target.value);
  };

  return (
    <div className="App">
      <Input
        value={value}
        onChange={handleValueChange}
        placeholder="type here"
      />
      <Output value={value} />
    </div>
  );
}
