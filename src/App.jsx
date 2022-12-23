import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import Favorite from "./pages/Favorite";
import Main from "./pages/Main"

import Header from './components/Header/Header';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="wrapper clear">
      <Header onClickOpen={() => setDrawerOpen(true)}/>
      <Routes>
        <Route path="/" element={<Main setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
