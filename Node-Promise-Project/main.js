// default export is imported from app.js file.
import getData from "./app.js";

// function is running with a number, it gives userId=5's user data and posts on console.
getData(5).then((data)=>console.log(data)).catch((e)=> console.log(e));