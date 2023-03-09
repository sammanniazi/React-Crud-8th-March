//import logo from './logo.svg';
//import './App.css';
import CreatePost from './component/postForm'
import GetData from './component/getdata'
import New from './component/newForm'
import Table from './container/Table/index'
import PostForm from './container/createPost.js/index'

function App() {
  return (
    <div className="App">
      <PostForm />
      <h1 style={{ textAlign: "center" }}>Posts Table</h1>
      <br></br>
      <Table />
      {/* <New/> */}
    </div>
  );
}

export default App;
