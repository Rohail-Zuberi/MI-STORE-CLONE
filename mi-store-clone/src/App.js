import './App.css';
// Importing the new component created 
// This will work even if we write "import dfsdf from './Navbar'" because of the "export default Navbar" line at the end of the Navbar.js file 
import Navbar from './Navbar'; 

function App() {

  // for inline css
  const stylingoption = {
    backgroundColor: "red"
  }

  return (   // We can have only one tag in return. Solution for this is to wrap everything in an empty tag.
    // This div is not HTML. It is "jsx", which is a combo of html and js
    // We can apply CSS from the App.css file being imported.
    // We can also apply inline css like shown below
    <>
      <Navbar />
      <div style={stylingoption}>
        hello
      </div>
    </>
  );
}

export default App;
