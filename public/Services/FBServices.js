// var FBShare = false;
// var FBLikes = false;
var FBShare = true;
var FBLikes = true;
window.fbAsyncInit = function () {
  FB.init({
    appId: "458498775678924",
    status: true,
    cookie: true,
    xfbml: true,
    oauth: true,
  });

  //Share
  document.getElementById("shareBtn").onclick = function () {
    FB.ui(
      {
        method: "share",
        href: "https://developers.facebook.com/docs/",
      },
      // callback
      function (response) {
        if (response && !response.error_message) {
          alert("Posting completed.");
          FBShare = true;
        } else {
          alert("Error while posting.");
        }
      }
    );
  };

  //Facebook Like Event
  FB.Event.subscribe("edge.create", function (response) {
    alert("Like is working");
    FBLikes = true;
  });

  //Facebook Unlike Event
  FB.Event.subscribe("edge.remove", function (response) {
    alert("Like is Removed");
    FBLikes = false;
  });
};
(function (d) {
  var js,
    id = "facebook-jssdk";
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement("script");
  js.id = id;
  js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  d.getElementsByTagName("head")[0].appendChild(js);
})(document);
