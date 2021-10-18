import { Container } from "@chakra-ui/react";
import Header from "./Header";

export default function DefaultLayout({ children }) {
    return (
        <section className="app-wrapper">
            <Header />
            <main>
                <Container>{children}</Container>
            </main>
        </section>
    );
}
