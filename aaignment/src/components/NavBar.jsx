import React from "react";
import { styled } from "@mui/system";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { blue, grey, orange } from "@mui/material/colors";

// const Wrap = styled(Box)({
// display: "flex",
// flexDirection: "row",
// backgroundColor: "whitesmoke",
// padding: 24,
// borderBottom: 3,
// });

const NavBar = () => {
	const res = useMediaQuery("(max-width:768px)");
	return (
		<Box
			sx={
				res
					? {
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-around",
							backgroundColor: "whitesmoke",
							p: 3,
					  }
					: {
							display: "flex",
							flexDirection: "row",
							backgroundColor: "whitesmoke",
							p: 3,
					  }
			}
		>
			<Box>
				<Typography variant="h3" fontWeight={"bold"} display={"inline-block"}>
					Exam&nbsp;
				</Typography>
				<Typography
					variant="h3"
					fontWeight={"bold"}
					display={"inline-block"}
					color={blue[800]}
				>
					Labs
				</Typography>
			</Box>
		</Box>
	);
};

export default NavBar;
