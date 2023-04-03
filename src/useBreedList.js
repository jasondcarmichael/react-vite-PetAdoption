import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
    const results = useQuery(["breeds", animal], fetchBreedList);
    return [results?.data?.breeds ?? [], results.status];
}

/// REACT QUERY is more simple == only 7 lines of code


/// BELOW Original Custom Hook Replaced by React Query

// import { useState, useEffect } from 'react';

// const localCache = {};

// export default function useBreedList(animal) {
//     const [breedList, setBreedList] = useState([]);
//     const [status, setStatus] = useState("unloaded");

//     useEffect(() => {
//         if (!animal) {
//             setBreedList([]);
//         } else if (localCache[animal]) {
//             setBreedList(localCache[animal])
//         } else {
//             requestBreedlist();
//         }

//         async function requestBreedlist() {
//             setBreedList([]);
//             setStatus("loading")

//             const res = await fetch(
//                 `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//             );
//             const json = await res.json();
//             localCache[animal] = json.breeds || []
//             setBreedList(localCache[animal]);
//             setStatus("loaded");
//         }
//     }, [animal]);

//     return [breedList, status];
// }