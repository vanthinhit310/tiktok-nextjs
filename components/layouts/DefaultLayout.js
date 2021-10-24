import { Container } from "@chakra-ui/react";
import Header from "./Header";

export default function DefaultLayout({ children }) {
    return (
        <section className="app-wrapper" style={{ height: "100%" }}>
            <Header />
            <main style={{ marginTop: "65px", height: "calc(100% - 65px)" }}>
                <Container className="h100">{children}</Container>
            </main>
        </section>
    );
}
