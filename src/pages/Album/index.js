import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import './index.css';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const API_URL = 'http://localhost:8081';

const Album = () => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		callApi();
	}, []);

	useEffect(() => {
		console.log(`photos`, photos);
	}, [photos]);

	const callApi = () => {
		axios
			.get(API_URL + '/photos-public')
			.then(response => {
				console.log(`response`, response);

				if (response.data.success) setPhotos([...photos, ...response.data.result.items]);
			})
			.catch(error => console.log(`error`, error));
	};

	return (
		<div>
			{/* Hero unit */}
			<Box py={8}>
				<Container maxWidth="sm">
					<Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
						Album layout
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
						Something short and leading about the collection below—its contents, the creator, etc. Make it short and
						sweet, but not too short so folks don&apos;t simply skip over it entirely.
					</Typography>
				</Container>
			</Box>
			<Container sx={{ py: 8 }} maxWidth="lg">
				{/* End hero unit */}

				<InfiniteScroll dataLength={photos.length} next={() => callApi()} hasMore={true} loader={<h4>Loading...</h4>}>
					<GridList cellHeight={300} spacing={4} cols={3}>
						{photos.map((tile, index) => (
							<GridListTile key={index} cols={1}>
								<img src={tile.media.m} alt={tile.title} />
								<GridListTileBar
									title={tile.title}
									subtitle={<span>by: {tile.author}</span>}
									actionIcon={
										<IconButton aria-label={`info about ${tile.title}`} className="icon" onClick={() => callApi()}>
											<InfoIcon />
										</IconButton>
									}
								/>
							</GridListTile>
						))}
					</GridList>
				</InfiniteScroll>
			</Container>
		</div>
	);
};

export default Album;
