import { useContext } from 'react';
import './App.css';
import Home from './ContextAPI/Home';
import Login from './ContextAPI/Login';
import Nav from './ContextAPI/Nav';
import { myContext } from './ContextAPI/Context';


function App() {
  const { isloggedIn } = useContext(myContext)
  return (
    <div className="App">
      {isloggedIn ? (<div><Nav /><Home /></div>) : (<Login />)}
    </div>
  );
}
export default App;