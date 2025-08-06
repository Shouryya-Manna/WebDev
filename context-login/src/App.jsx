import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./Context/UserContextProvider"


function App() {

  return (
    <>
     <UserContextProvider>
      <h1 className=" text-8xl text-center m-10">Dopademics</h1>
      <Login/>
      <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
