import React, {useState, useEffect} from "react";
import axios from "axios";
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const useAxios = (axiosParams) => {
	const [response, setReponse] = useState(undefined);
	const [error, setError] = useState("");
	const [loading, setloading] = useState(true);

	useEffect(() => {
		(async (params) => {
			try {
				const result = await axios.request(params);
				setReponse(result);
			} catch (err) {
				setError(err);
			} finally {
				setloading(false);
			}
		})(axiosParams);
	}, []);

	return {response, error, loading};
};

export default useAxios;

// const [response, setReponse] = useState(null);
// 	const [error, seterror] = useState(null);
// 	const [loading, setloading] = useState(true);

// 	useEffect(() => {
// 		(() => {
// 			axios
// 				.get("/posts")
// 				.then((res) => setReponse(res.data))
// 				.catch((err) => seterror(err))
// 				.finally(() => setloading(false));
// 		})();
// 	}, []);
// const [response, setReponse] = useState(null);
// const [error, seterror] = useState(null);
// const [loading, setloading] = useState(true);
// useEffect(() => {
//     (() => {
//         axios[method](url, JSON.parse(header), JSON.parse(body))
//             .then((res) => setReponse(res.data))
//             .catch((err) => seterror(err))
//             .finally(() => setloading(false));
//     })();
// }, []);
