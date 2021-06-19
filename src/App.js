import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Album from './pages/Album/album';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
	const [search, setSearch] = React.useState('');

	const handleSearchChange = value => {
		setSearch(value);
	};

	return (
		<div>
			<Header onActionClick={handleSearchChange} />
			<Album inputSearch={search} />
			<Footer />
		</div>
	);
};

export default App;
