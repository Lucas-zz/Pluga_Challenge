import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LastSeenToolsContext from './contexts/lastSeenToolsContext';
import SearchPage from './pages/SearchPage';
import { GlobalStyle } from './style/reset';

function App() {
  const [lastSeenTools, setLastSeenTools] = useState([]);

  return (
    <>
      <GlobalStyle />
      <LastSeenToolsContext.Provider value={{ lastSeenTools, setLastSeenTools }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchPage />} />
          </Routes>
        </BrowserRouter >
      </LastSeenToolsContext.Provider>
    </>
  );
}

export default App;
