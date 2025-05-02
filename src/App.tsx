import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    Navbar,
    Hero,
    Goals,
    BackToTopButton,
    Trainers,
    Testimonials,
} from "./components/index";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main className="min-h-screen">
                <Navbar />

                <Hero />

                <Goals />

                <Trainers />

                <Testimonials />

                <BackToTopButton />
            </main>
        </QueryClientProvider>
    );
}

export default App;
