import React from "react";
import Navbar from "./components/Navbar";
import CreateSnippet from "./components/CreateSnippet";
function App() {
  return (
    <main className="conatainer max-width-4xl mx-auto p-4">
      <Navbar />
      <CreateSnippet />
    </main>
  );
}

export default App;
