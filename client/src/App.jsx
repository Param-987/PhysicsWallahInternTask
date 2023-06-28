import { useEffect, useState } from "react";
import "./App.scss";
import CenterDesc from "./components/CenterDesc/CenterDesc";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "./redux/User/apiCalls";

function App() {
  const [sharedProp,setSharedProp] = useState(null)
  const handlePropChange = (value)=> setSharedProp(value)

  const {user} = useSelector(state=>state.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    
    dispatch(getUserById("649a7b00cce571fc3561f5e4"))
  },[dispatch])

console.log(user)
  return (
    user && 
    <div className="App">
      <Navbar />
      <div className="Appcontainer">
        <Sidebar onPropChange={handlePropChange}/>
        <div className="content">
        <CenterDesc data={sharedProp}/>
        </div>
      </div>
    </div>
  );
}

export default App;
