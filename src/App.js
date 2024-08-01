import Footer from "./components/footer";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import MainContent from "./components/main-content";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
