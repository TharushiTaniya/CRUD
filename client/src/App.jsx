import React from 'react';
import{ BrowserRouter, Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={home} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
