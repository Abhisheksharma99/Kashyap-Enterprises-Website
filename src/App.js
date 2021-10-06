import {Switch, Route } from "react-router-dom";
import ProductPage from "./ProductPage";
import Layout from "./Layout";
import BlogsPage from "./BlogsPage";
import Navbar from "./Navbar";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Footer from "./Footer";
function App() {
  return (
    <main>
      <Navbar/>
    <Switch>
      <Route exact path='/' component={Layout}/>
    <Route path='/products' component={ProductPage}/>
    <Route path='/blogs' component={BlogsPage}/>
    <Route path='/aboutus' component={Aboutus}/>
    <Route path='/contactus' component={Contactus}/>
   </Switch>
   <Footer/>
   </main>
  )
}

export default App;
