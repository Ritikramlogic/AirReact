var TwitterFollow = true;

document.getElementById("TwButton").addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Twitter: " + document.getElementById("TwUsername").value);
  let data = await fetch("http://localhost:5000/Tfollow/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      USER: document.getElementById("TwUsername").value,
    }),
  });

  data = await data.json();

  if (data.msg == true) {
    alert("You have successfully followed");
    TwitterFollow = true;
  } else {
    alert("Please enter correct username or Follow");
  }
});

twttr.ready((twttr) => {
  twttr.events.bind("follow", function (event) {
    console.log(event);
    alert("You have successfully Follwed");
    var followed_user_id = event.data.user_id;
    var followed_screen_name = event.data.screen_name;
  });

  twttr.events.bind("tweet", function (ev) {
    console.log(ev);
    alert("Tweet");
  });
});
