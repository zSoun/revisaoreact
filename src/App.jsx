import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage"
import Produtos from "./Pages/Produtos"
import Login from "./Pages/Login"
import Formulario from "./Pages/Formulario";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
