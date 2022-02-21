import React, {useState} from "react";
import "./TodoList.css";

const data = [
	"HTML Tutorial",
	"CSS Tutorial",
	"JavaScript Tutorial",
	"JQuery Tutorial",
	"PHP Tutorial",
	"Node.js Tutorial",
	"ReactJs Tutorial",
];

const TodoList = () => {
	const [todoList, settodoList] = useState("");
	const [demoData, setdemoData] = useState(data);

	const buttonHandler = () => {
		setdemoData((prev) =>
			todoList.length > 0 ? [...prev, todoList] : [...prev]
		);
		settodoList("");
	};
	const closeHandler = (item, index) => {
		setdemoData(demoData && demoData.filter((todo) => todo != item));
	};
	console.log("rerender");
	return (
		<div className='todo-container'>
			<h2>React Todo App</h2>
			<div className='todo-input'>
				<input
					type='text'
					value={todoList}
					onChange={(e) => settodoList(e.target.value)}
					placeholder='Enter Something'
				/>
				<button onClick={buttonHandler}>Add</button>
			</div>
			{demoData &&
				demoData.length > 0 &&
				demoData.map((item, index) => {
					return (
						<div key={index} className='todo-list'>
							<span>{item}</span>
							<i
								onClick={() => closeHandler(item, index)}
								className='fas fa-times icon'></i>
						</div>
					);
				})}
		</div>
	);
};

export default TodoList;
