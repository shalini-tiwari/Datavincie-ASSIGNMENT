import { DeleteForever } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React from "react";

const CartMobile = () => {
	return (
		<>
			<Box
				sx={{
					pl: 4,
					display: "flex",
					flexDirection: "column",
					pr: 4,
					backgroundColor: "whitesmoke",
					m: "31px",
					borderRadius: "30px",
				}}
			>
				<Box mt={5}>
					<Typography fontWeight={"bold"}>Review your order</Typography>
					<Typography>
						The following items have been added to your shopping cart.
					</Typography>
				</Box>
				<Box bgcolor={"white"} borderRadius={"6%"} mt={5} mb={5}>
					<Typography pl={2} display={"inline-block"} color={"grey"}>
						#&nbsp;
					</Typography>
					<Typography display={"inline-block"} fontWeight={"bold"}>
						1
					</Typography>
					<Typography pl={2} mt={2}>
						Product Description
					</Typography>
					<Typography pl={2} color={blue[500]} fontWeight={"bold"} mb={2}>
						Microsoft
					</Typography>
					<Typography pl={2}>Premium File</Typography>
					<Typography pl={2}>Training Course</Typography>
					<Box mt={3} p={2} display={"flex"} justifyContent={"space-between"}>
						<Typography fontWeight={"bold"}>$49.79</Typography>
						<DeleteForever />
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CartMobile;
