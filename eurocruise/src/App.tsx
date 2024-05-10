import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {RouterProvider} from "react-router";
import RootLayout from "./components/Layouts/RootLayout/RootLayout";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AddServices from "./pages/AddServices/AddServices";
import Delivery from './pages/Delivery/Delivery';
import Sales from './pages/Sales/Sales';

const DefaultRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<MainPage/>}/>
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/about-us' element={<MainPage/>} />
          <Route path='/add-services' element={<AddServices/>} />
          <Route path='/delivery' element={<Delivery/>} />
          <Route path='/sales' element={<Sales/>} />
        </Route>
    )
);

function App() {


  return (
      <>
        <RouterProvider router={DefaultRouter}/>
      </>
  )
}
export default App

