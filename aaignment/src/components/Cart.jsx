import {
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React from "react";

const StyledTableCell = (props) => (
	<TableCell
		sx={{
			border: 1,
			borderColor: grey[400],
		}}
	>
		{props.children}
	</TableCell>
);

const Cart = () => {
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
					<Typography fontSize={"1.5rem"} fontWeight={"bold"}>
						Review your order
					</Typography>
					<Typography fontSize={"1.5rem"}>
						The following items have been added to your shopping cart.
					</Typography>
					<TableContainer
						sx={{
							mt: 3,
							mb: 3,
							borderRadius: "16px",
							border: 1,
							borderColor: grey[400],
						}}
					>
						<Table>
							<TableHead>
								<TableRow>
									<StyledTableCell>
										<Typography>#</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Typography>Product Description</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Typography>Price</Typography>
									</StyledTableCell>
									<StyledTableCell></StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody sx={{ bgcolor: "white" }}>
								<TableRow>
									<StyledTableCell>
										<Typography fontWeight={"bold"}>1</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Typography color={blue[500]} fontWeight={"bold"} mb={2}>
											Microsoft
										</Typography>
										<Typography>Premium File</Typography>
										<Typography>Training Course</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Typography fontWeight={"bold"}>$49.79</Typography>
									</StyledTableCell>
									<StyledTableCell>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-around",
												alignItems: "center",
												bgcolor: grey[100],
												width: "50%",
												height: "75px",
												borderRadius: "9%",
												"&:hover": {
													boxShadow: "2px 3px",
												},
											}}
										>
											<Typography
												color={grey[700]}
												fontWeight={"bold"}
												textAlign={"center"}
												display={"inline-block"}
												sx={{
													"&:hover": {
														color: blue[700],
													},
												}}
											>
												Remove
											</Typography>
										</Box>
									</StyledTableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</>
	);
};

export default Cart;
