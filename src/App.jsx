import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const postLists = useSelector((state) => state.posts.value);
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
      <div className="displayPosts">
        {postLists.map((post) => (
          <div key={post.id} className="post">
            <h1 className="postName">{post.name}</h1>
            <h1 className="postContent">{post.content}</h1>
            <button onClick={() => dispatch(deletePost({ id: post.id }))}>
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
