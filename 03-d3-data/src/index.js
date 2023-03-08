import * as d3 from "d3";

//Charger les données
const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const userUrl = "https://jsonplaceholder.typicode.com/users";
//Pour pouvoir lire les données, faire un d3.json()

Promise.all([d3.json(postsUrl), d3.json(userUrl)]).then(([posts, users]) => {});
