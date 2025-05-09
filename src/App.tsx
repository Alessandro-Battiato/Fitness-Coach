import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    Navbar,
    Hero,
    Goals,
    BackToTopButton,
    Trainers,
    Testimonials,
    Services,
    Footer,
} from "./components/index";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Navbar />

            <main className="min-h-screen">
                <Hero />

                <Goals />

                <Trainers />

                <Testimonials />

                <Services />
            </main>

            <Footer />

            <BackToTopButton />
        </QueryClientProvider>
    );
}

export default App;
