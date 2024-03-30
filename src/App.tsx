import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ mt: "4rem", pt: "1rem" }}>
        <Routes>
          <Route path="/" element={<Products />} />

        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
