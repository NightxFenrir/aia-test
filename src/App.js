import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Album from './pages/Album';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
	return (
		<div>
			<Header />
			<Album />
			<Footer />
		</div>
	);
};

export default App;
