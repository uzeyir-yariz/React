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
