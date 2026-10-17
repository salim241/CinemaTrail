import { useState } from "react"

import { createBrowserRouter, RouterProvider } from "react-router-dom"


import Home from "./pages/Home.jsx"
import Movies from "./pages/Movies.jsx"
import Popular from "./pages/Popular.jsx"
import TopRated from "./pages/TopRated.jsx"
import TvShow from "./pages/TvShow.jsx"


function App() {

  // const [isSearching, setIsSearching] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movie",
        element: <Movies />
      },
      {
        path: "/popular",
        element: <Popular />
      },
      {
        path: "/toprated",
        element: <TopRated />
      },
      {
        path: "/tvshows",
        element: <TvShow />
      }
    ]
  )

  return (
    <div>
      <RouterProvider  router= {router}/>
    </div>
  )
}

export default App
