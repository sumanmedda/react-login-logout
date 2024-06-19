import { Outlet } from "react-router-dom"
import Container from "./Container"

function App(){
  
  return<>
    <Container>
      <Outlet />
    </Container>
  </>
}

export default App