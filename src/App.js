//import logo from './logo.svg';
//import './App.css';
import CreatePost from './component/postform'
import GetData from './component/getdata'
import New from './component/newform'
import Table from './component/getdatafromAPI'

function App() {
  return (
    <div className="App">
<CreatePost/>
<h1 style={{ textAlign: "center" }}>Posts Table</h1>
<br></br>
<Table/>
   {/* <New/> */}
    </div>
  );
}

export default App;
