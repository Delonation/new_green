import React, { useState } from "react";
import {
	AppBar,
	Box,
	Button,
	Typography,
	IconButton,
	Toolbar,
	ListItem,
	List,
	ListItemButton,
	ListItemText,
	SwipeableDrawer,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { navItems } from "../assets/data/index";
import styles from "./styles";

export default function Navbar() {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' style={styles.navbar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={() => setDrawerOpen(!isDrawerOpen)}
						edge='start'
						sx={{ mr: 2, display: { xl: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography
						style={styles.Logo}
						variant='h4'
						component='div'
						sx={{
							flexGrow: 1,
							textAlign: { xs: "center", sm: "center", md: "left" },
						}}>
						NEO GREEN
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", sm: "block" },
							textAlign: "right",
						}}>

						{navItems.map((item, index) => {
							const isRightBorder =
								index === navItems.length - 1 ? styles.noRightBorders : null;
							return (
								<a key={index} style={{ textDecoration: 'none', color: 'white' }} href={item['id']}>
									<Button
										style={{ ...styles.navItems, ...isRightBorder }}
										key={item['name']}
										sx={{ color: "#fff" }}>
										{item['name']}
									</Button></a>
							);
						})}
					</Box>
				</Toolbar>
			</AppBar>
			<SwipeableDrawer
				anchor='left'
				open={isDrawerOpen}
				onClose={() => setDrawerOpen(false)}
				onOpen={() => setDrawerOpen(true)}
				sx={{
					"& .MuiDrawer-paper": { boxSizing: "border-box", width: 220 },
				}}>
				<List>
					{navItems.map((text) => (
						<ListItem key={text['name']} disablePadding>
							<ListItemButton >
								<ListItemText primary={text['name']} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</SwipeableDrawer>
		</Box>
	);


}
