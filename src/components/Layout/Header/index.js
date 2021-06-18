import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		color: 'white',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `1em `,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const Header = ({ onActionClick }) => {
	const classes = useStyles();
	const [input, setInput] = React.useState('');

	const handleChange = event => {
		setInput(event.target.value);
	};

	return (
		<AppBar position="relative">
			<Toolbar>
				<CameraIcon sx={{ mr: 2 }} />
				<Typography variant="h6" color="inherit" noWrap className={classes.title}>
					Album layout
				</Typography>
				<div className={classes.search}>
					{/* <div className={classes.searchIcon}>
						<SearchIcon />
					</div> */}
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'search' }}
						onChange={handleChange}
					/>
					<IconButton
						type="submit"
						className={classes.searchIcon}
						aria-label="search"
						onClick={() => onActionClick(input)}
					>
						<SearchIcon />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
