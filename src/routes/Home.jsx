import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home(){
  const navigate = useNavigate()

  let browserLocalStorage = localStorage.getItem('localStorageKey')  

  let logoutUser = () => {
    localStorage.removeItem("localStorageKey")
    navigate('/auth')
  }

  useEffect(() => {
    if(!browserLocalStorage){
      navigate('/auth')
    }
  })
    
    return<>
    <h1>Home Page</h1>
    <h1>Local Storage Key == {!browserLocalStorage ? `No Code Found` : browserLocalStorage}</h1>
    <br />
    <button type="button" className="btn btn-danger" onClick={() => logoutUser()}>Logout</button>
  </>
}

export default Home