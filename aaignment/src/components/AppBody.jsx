import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import timer from "../util/timer";
import TimerMobile from "./TimerMobile";

const AppBody = () => {
	const [hours, minutes, seconds] = timer();

	const res = useMediaQuery("(max-width:768px)");

	return (
		<>
			<Box
				sx={{
					pl: 4,
					display: "flex",
					flexDirection: "column",
					pr: 4,
				}}
			>
				{
					<Box mb={5}>
						<Typography variant="h4" fontWeight={"bold"} pb={2} pr={2}>
							Secure One-Step Checkout
						</Typography>
						<Typography variant="h5" fontWeight={"600"} color={blue[500]}>
							Your Product Will Become Available Immediately After Purchase
						</Typography>
					</Box>
				}

				<Box
					sx={
						res
							? {
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									alignContent: "center",
									backgroundColor: "#ffecca",
									border: "2px solid #ffd57c",
									borderRadius: "8px",
							  }
							: {
									mt: 4,
									mb: 4,

									display: "flex",
									flexDirection: "row",
									background: "linear-gradient(90deg,#fb0,#f80)",
									borderRadius: "10rem",
									height: "50px",
									justifyContent: "space-between",
									alignItems: "center",
							  }
					}
				>
					<Box
						sx={
							res
								? {
										display: "flex",
										flexDirection: "row",
										justifyContent: "center",
										m: "5px auto",
								  }
								: {
										display: "flex",
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
								  }
						}
					>
						<img
							height={50}
							width={50}
							src={
								res
									? "https://www.exam-labs.com/static/img/clock_mobile.png"
									: "https://www.exam-labs.com/static/img/clock_desktop.png"
							}
						/>

						<Typography
							fontWeight={600}
							fontSize={18}
							m={"auto 0"}
							sx={res ? { p: "0 8px" } : {}}
						>
							LIMITED TIME OFFER
						</Typography>
					</Box>
					{res ? (
						<TimerMobile />
					) : (
						<Box
							sx={
								res
									? { display: "flex", flexDirection: "column" }
									: {
											display: "flex",
											flexDirection: "row",
									  }
							}
						>
							<Typography
								fontSize={20}
								sx={res ? { display: "inline-block" } : {}}
							>
								Ends in:{" "}
							</Typography>
							<Typography
								fontSize={20}
								fontWeight={600}
								sx={res ? { display: "inline-block" } : {}}
							>
								{hours > 9 ? hours : "0" + hours}
								{":"}
								{minutes > 9 ? minutes : "0" + minutes}
								{":"}
								{seconds > 9 ? seconds : "0" + seconds}
							</Typography>
						</Box>
					)}

					<Typography
						fontSize={18}
						fontWeight={600}
						pr={5}
						textAlign={"center"}
						sx={res ? { backgroundColor: "#ffd57c", m: "5px 0" } : {}}
					>
						GET 10% OFF &nbsp;&nbsp; Use Code: EXAMSTART
					</Typography>
				</Box>
			</Box>
		</>
	);
};

export default AppBody;
