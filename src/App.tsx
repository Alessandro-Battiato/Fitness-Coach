import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main className="min-h-screen">
                <Navbar />

                <Hero />
            </main>
        </QueryClientProvider>
    );
}

export default App;
