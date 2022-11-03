import React from 'react';

// Import your component on the line below:
import Welcome from "./components/Welcome"


function App() {
  
  let name = "Jimbo"
  let age = 72

  return (
    <main>

      {/* Add your component here */}
        <Welcome username={name} userAge={age}/>
    </main>
  );
}

export default App;