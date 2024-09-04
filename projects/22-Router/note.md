# note

## main.jsx

```JSX
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

```

## App.jsx

```JSX
import "bulma/css/bulma.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// * page
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";
import UserList from "./pages/UserList";
import User from "./pages/User";

const BigPage = React.lazy(() => import("./pages/BigPage"))

function App() {
  return (
    <div className="columns p-4">
      <div className="column">
        <Nav />
      </div>

      <div className="column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/users" element={<UserList />} >
            <Route path="user/:id" element={<User />} />
          </Route>

          <Route 
            path="/data" 
            element={
              <Suspense fallback={<div>loading...</div>} >
                <BigPage />
              </Suspense>
            } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

```

## About.jsx

```JSX
import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="subtitle">about</h2>
      <button onClick={() => navigate("/contact")} className="button">contact us</button>
    </div>
  )
}

export default About

```

## BigPage.jsx

```JSX
const BigPage = () => {

  const image_arr = [];
  for (let index = 0; index < 100; index++) {
    image_arr.push(
      <img 
        loading="lazy" 
        key={index} 
        alt={`random picture ${index}`}
        title={`random picture ${index}`}
        src={`https://picsum.photos/200/200?image=${index}`}/>
    )
  }


  return (
    <div>
      <h2 className="subtitle">büyük veriler</h2>
      {image_arr}
    </div>
  )
}

export default BigPage

```

## Contact.jsx

```JSX
import { useNavigate } from "react-router-dom"

const Contact = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h2 className="subtitle">contact</h2>
      <button onClick={() => navigate("/about")} className="button">about us</button>
    </div>
  )
}

export default Contact

```

## Home.jsx

```JSX
const Home = () => {
  return (
    <div>
      <h2 className="subtitle">Home</h2>
    </div>
  )
}

export default Home

```

## NotFound.jsx

```JSX
const NotFound = () => {
  return (
    <div>
      not found      
    </div>
  )
}

export default NotFound

```

## User.jsx

```JSX
import { useParams } from "react-router-dom"

const User = () => {

  const { id } = useParams();

  return (
    <div>
      use {id}
    </div>
  )
}

export default User

```

## UserList.jsx

```JSX
import { Link, Outlet } from "react-router-dom"

const UserList = () => {
  return (
    <div>
      <h2 className="subtitle">kullanıcılar</h2>
      <ul>
        <li><Link to="user/1">user 1</Link></li>
        <li><Link to="user/2">user 2</Link></li>
        <li><Link to="user/3">user 3</Link></li>
      </ul>
      <br />
      <Outlet/>
    </div>
  )
}

export default UserList

```
