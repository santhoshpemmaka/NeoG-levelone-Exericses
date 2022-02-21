import React, {useState} from "react";

const CharacterCounter = () => {
	const [value, setValue] = useState("");
	return (
		<div style={{width: "60%", margin: "0 auto", position: "relative"}}>
			<textarea
				style={{width: "100%", minHeight: "50px"}}
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder='Enter text here'></textarea>
			<span style={{position: "absolute", top: "2rem", left: "34rem"}}>
				{value.length}
			</span>
		</div>
	);
};

export default CharacterCounter;
