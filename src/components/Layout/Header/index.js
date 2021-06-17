import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
	return (
		<AppBar position="relative">
			<Toolbar>
				<CameraIcon sx={{ mr: 2 }} />
				<Typography variant="h6" color="inherit" noWrap>
					Album layout
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
