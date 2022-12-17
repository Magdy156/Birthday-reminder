import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [persons, setPerson] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{persons.length} Birthday today</h3>
        <List persons={persons} />
        <button onClick={() => setPerson([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
