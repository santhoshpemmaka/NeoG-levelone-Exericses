import React, {useState} from "react";
import "./SizeFonts.css";

const SizeFonts = () => {
	const [sizeFont, setsizeFont] = useState(16);
	let resultSize = sizeFont;
	const btnHandler = (e) => {
		if (e.target.innerText == "+") setsizeFont(resultSize * 8);
		else setsizeFont(resultSize / 8);
	};
	return (
		<div>
			<label className='label-text' style={{fontSize: `${sizeFont}px`}}>
				neoG think React
			</label>
			<br />
			<br />
			<button className='btn' onClick={(e) => btnHandler(e)}>
				+
			</button>
			<button className='btn' onClick={(e) => btnHandler(e)}>
				-
			</button>
		</div>
	);
};

export default SizeFonts;
