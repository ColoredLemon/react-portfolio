
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"
import NotFoundPage from "./pages/NotFoundPage"
import { 
  Route, 
  createHashRouter, 
  createRoutesFromElements, 
  HashProvider, 
  HashRouter} from "react-router-dom"

const router = createHashRouter(
  createRoutesFromElements(
    <HashRouter basename='/'>
    <Route path='/' element ={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/AboutPage' element={<AboutPage/>}/>
    <Route path='/ProjectsPage' element={<ProjectsPage/>}/>
    <Route path='/ContactPage' element={<ContactPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route>
  </HashRouter>
  )
);

const App = () => {
  return (
    <HashProvider router={router}/>
  )
}

export default App
