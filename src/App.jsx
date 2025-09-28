import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
      <div className="addPost">
        <input type="text" id="name" placeholder="名前" />
        <input type="text" id="content" placeholder="コンテンス" />
        <button>投稿</button>
        <hr />
      </div>
    </div>
  );
}

export default App;
