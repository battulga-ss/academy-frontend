import "./App.css";
import { MovieMain } from "./modules/components/MainMovie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieMain />
    </QueryClientProvider>
  );
}

export default App;
