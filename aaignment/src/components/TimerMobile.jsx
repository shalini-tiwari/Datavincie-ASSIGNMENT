import { Box, Typography } from "@mui/material";
import React from "react";
import timer from "../util/timer";

const TimerMobile = () => {
	const [hours, minutes, seconds] = timer();

	return (
		<Box textAlign={"center"} m={"5px"}>
			<Typography
				sx={{
					display: "inline-block",
				}}
				fontSize={20}
			>
				Ends in:{" "}
			</Typography>
			<Typography
				display={"inline-block"}
				fontSize={20}
				fontWeight={600}
				sx={{
					display: "inline-block",
				}}
			>
				{hours > 9 ? hours : "0" + hours}
				{":"}
				{minutes > 9 ? minutes : "0" + minutes}
				{":"}
				{seconds > 9 ? seconds : "0" + seconds}
			</Typography>
		</Box>
	);
};

export default TimerMobile;
