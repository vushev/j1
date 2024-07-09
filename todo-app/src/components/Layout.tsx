// components/Layout.tsx

import React from 'react';
import { Container, Navbar, NavLink } from 'react-bootstrap';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand><NavLink href="/">TODO App</NavLink></Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="mt-4">
                {children}
            </Container>
        </>
    );
};

export default Layout;
