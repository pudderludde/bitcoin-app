import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export interface RootLayoutProps {
	children?: React.ReactNode;
}

const RootLayout = ({ children = <Outlet /> }: RootLayoutProps) => (
	<>
		<Navbar />
		<main style={{minHeight: '100vh', minWidth: '100%', marginTop: '25px', marginBottom: '25px'}}>{children}</main>
	</>
);

export default RootLayout;