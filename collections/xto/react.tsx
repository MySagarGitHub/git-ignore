import React from "react";

const App: React.FC = () => (
    <div style={{ fontFamily: "sans-serif", minHeight: "100vh", background: "#f5f7fa", color: "#222" }}>
        <header style={{ padding: "2rem 0", textAlign: "center", background: "#4f8cff", color: "#fff" }}>
            <h1>Welcome to My One Page Website</h1>
            <p>Your simple React + TypeScript single page</p>
        </header>
        <main style={{ maxWidth: 700, margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
            <section>
                <h2>About</h2>
                <p>
                    This is a simple one page website built with React and TypeScript. You can use this as a starting point for your own projects!
                </p>
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h2>Features</h2>
                <ul>
                    <li>Modern React with TypeScript</li>
                    <li>Clean, responsive layout</li>
                    <li>Easy to customize</li>
                </ul>
            </section>
            <section style={{ marginTop: "2rem" }}>
                <h2>Contact</h2>
                <p>
                    Have questions? Email us at <a href="mailto:info@example.com">info@example.com</a>
                </p>
            </section>
        </main>
        <footer style={{ textAlign: "center", padding: "1rem 0", background: "#eaeaea", marginTop: "2rem" }}>
            &copy; {new Date().getFullYear()} My One Page Website
        </footer>
    </div>
);

export default App;</div>