import { Route, Routes } from "react-router";
import Navbar from "./pages/components/Navbar";
import Home from "./pages/home";
import Autor from "./pages/autor";
import Livro from "./pages/livro";
import Leitor from "./pages/leitor";
import Emprestimo from "./pages/emprestimo";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autor" element={<Autor />} />
        <Route path="/livro" element={<Livro />} />
        <Route path="/leitor" element={<Leitor />} />
        <Route path="/emprestimo" element={<Emprestimo />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
