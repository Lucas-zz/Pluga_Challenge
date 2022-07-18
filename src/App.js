import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './style/reset';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Oi</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
