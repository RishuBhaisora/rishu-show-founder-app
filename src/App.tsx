import { Route, Routes } from "react-router-dom";
import ShowDetail from "./components/ShowDetail";
import ShowsList from "./components/ShowsList";

function App() {
  return (
    <Routes>
      <Route index element={<ShowsList />} />
      <Route path="/shows/:id" element={<ShowDetail />} />
    </Routes>
  );
}

export default App;
