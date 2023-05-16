import { add, compareAsc } from "date-fns";
import React, { useEffect, useState } from "react";

const timer = () => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	let deadline = add(new Date(), {
		hours: 1,
		minutes: 30,
		seconds: 30,
	});

	// const [deadline, setDeadline] = useState(
	// 	add(new Date(), {
	// 		hours: 0,
	// 		seconds: 5,
	// 	})
	// );

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);

		return () => clearInterval(interval);
	}, []);

	const getTime = () => {
		const time = deadline - Date.now();
		if (compareAsc(deadline, Date.now()) !== 1) {
			// console.log("reset");
			deadline = add(new Date(), {
				hours: 0,
				seconds: 5,
			});
			// const reset = add(new Date(), {
			// 	hours: 0,
			// 	seconds: 5,
			// });
			// setDeadline(reset);
		}

		setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
	};

	return [hours, minutes, seconds];
};

export default timer;
