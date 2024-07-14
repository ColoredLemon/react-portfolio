
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage/>}/>)
);

const App = () => {
  return (
    <RouterProvider router={router}/>
/*    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16">
        
        <AboutMe />
      </main>
      <Footer />
      
    </div> */
  )
}

export default App
