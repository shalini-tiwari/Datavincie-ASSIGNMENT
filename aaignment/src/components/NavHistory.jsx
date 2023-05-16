import { Box, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React from "react";

const NavHistory = () => {
	return (
		<Box
			sx={{
				mt: 6,
				mb: 6,
				pl: 4,
				pr: 4,
			}}
		>
			<Typography
				color={blue[500]}
				sx={{
					display: "inline-block",
				}}
			>
				Home &gt;&nbsp;
			</Typography>
			<Typography
				color={grey[400]}
				sx={{
					display: "inline-block",
				}}
			>
				Checkout
			</Typography>
		</Box>
	);
};

export default NavHistory;
