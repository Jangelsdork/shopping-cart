import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="topnav">
        <div>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
        </div>
        <div className="brand">COLOURS</div>
      </div>
      <div className="homeContainer">
        <a href="/shop" className="homeContent">
          COLOURS
        </a>
      </div>
    </div>
  );
}

export default App;
