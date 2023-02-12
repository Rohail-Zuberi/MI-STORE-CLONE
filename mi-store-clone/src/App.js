import './App.css';

function App() {
  // We can have only one tag in return. Solution for this is to wrap everything in an empty tag.

  // for inline css
  const stylingoption = {
    backgroundColor: "red"
  }

  return (
    // This div is not HTML. It is "jsx", which is a combo of html and js
    // We can apply CSS from the App.css file being imported.
    // We can also apply inline css like shown below
    <div style={stylingoption}>
      hello
    </div>
  );
}

export default App;
