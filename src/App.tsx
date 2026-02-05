import "./App.css";
import { MovieMain } from "./modules/components/MovieMain";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./modules/components/MovieDetail";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MovieMain />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
      {/* <MovieMain /> */}
    </QueryClientProvider>
  );
}

export default App;
