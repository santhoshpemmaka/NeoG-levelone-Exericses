import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import useAxios from "./useAxios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const UseCustomAxios = () => {
	const {response, loading, error} = useAxios({
		method: "POST",
		url: "/posts",
		headers: {
			accept: "*/*",
		},
		data: {
			userId: 1,
			id: 19392,
			title: "title",
			body: "sample text",
		},
	});
	console.log(response);
	return <div>axios</div>;
};

export default UseCustomAxios;

// const {response, error, loading} = useAxios({
//     method: "post",
//     url: "/posts",
//     header: JSON.stringify({accept: "*/*"}),
//     body: JSON.stringify({
//         userId: 1,
//         id: 19392,
//         title: "title",
//         body: "sample text",
//     }),
// });
// const [data, setData] = useState();

// useEffect(() => {
//     if (response != null) {
//         setData(response);
//     }
// }, [response]);
// console.log(data?.id);
