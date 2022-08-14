// axios is imported.
import axios from "axios";



const getData = (postId) => {
    
    return new Promise(async (resolve, reject)=> {
       if(typeof postId == "number") {
        var userLink = "https://jsonplaceholder.typicode.com/users/1";
        var postsLink = "https://jsonplaceholder.typicode.com/posts?userId=1";
        var userLinkRepl = userLink.replace(/.$/,postId);
        var postsLinkRepl = postsLink.replace(/.$/,postId);
        const {data: user} = await axios(userLinkRepl);
        const {data: posts} = await axios(postsLinkRepl);
        let userData = user;
        userData.posts= posts;

       resolve(userData);
       }
   

   reject("There is a problem! Type a number.");
});
};


// export the function by default.
export default getData;