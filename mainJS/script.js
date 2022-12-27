const { log } = console;
const { error } = console;
const optionsNBA = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c445f54709mshbece22b25003e22p1022d3jsn95b2b3a1abf9",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
  },
  //   body: JSON.stringify(),
};

const asyncNBA = async (fetch) => {
  //   fetch.then((res) => res.json()).then((res) => log(res));

  let res = await fetch.then((res) => res.json());
  log(res);
  //   res.catch((err) => log(err));
};
// let api = asyncNBA(
//   fetch(
//     "https://free-nba.p.rapidapi.com/players?page=0&per_page=25",
//     optionsNBA
//   )
// );

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "59ee5408d0mshebaa6b8ee177727p15ab8ejsn9b851746420b",
    "X-RapidAPI-Host": "instagram47.p.rapidapi.com",
  },
};

const userInfo = {
  username: "xavierleyan_0907",
  userID: 8401699645,
  highlightID: "",
};

const get = {
  //end point
  userPosts: `user_posts?username=${userInfo.username}`, // subscription-disabled
  userFollowers: `user_followers?userid=${userInfo.userID}`, //error
  userFollowing: `user_following?userid=${userInfo.userID}`, //work
  emailAndDetails: `email_and_details?userid=${userInfo.userID}`, //// subscription-disabled
  stories: "get_stories",
  publicUserPosts: `public_user_posts?userid=${userInfo.userID}`,
};

const imgInstaPost = document.querySelector("img");
//fetching insta api
// fetch(`https://instagram47.p.rapidapi.com/${get.publicUserPosts}`, options)
//   .then((resp) => resp.json())
//   .then((resp) => {
//     const { body } = resp;
//     imgInstaPost.src = body.edges[0].node.thumbnail_src;
//     log(body.edges[0].node.thumbnail_src);
//     log(resp);
//   })
//   .catch((err) => error(err));

// fetch(
//   "https://instagram47.p.rapidapi.com/get_user_id?username=xavierleyan_0907",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const instaOption = {
  method: "GET",
  headers: {
    mode: "no-cors",
    client_id: `${userInfo.userID}`,
    // "redirect_uri": ,
    // "response_type": code,
    // "scope":
  },
};
fetch(`https://api.instagram.com/oauth/authorize`, instaOption)
  .then((resp) => resp.json())
  .then((resp) => log(resp))
  .catch((err) => error(err));

//need to understand ES6 modules, export and import. require. axios,
