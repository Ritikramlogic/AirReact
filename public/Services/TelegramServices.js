var previousNumber = null;
var Telegram = true;
//When user Submit all details
document.getElementById("formPart").addEventListener("submit", validateUser);

document.getElementById("phoneVerify").addEventListener("click", async (e) => {
  e.preventDefault();

  if (await validatePhone()) {
    console.log("Sorry you have already account");
    document.getElementById("JoinBTN").style.display = "none";
    document.getElementById("accountExist").style.display = "block";
  } else {
    document.getElementById("accountExist").style.display = "none";
    document.getElementById("phoneContainer").style.display = "none";
    document.getElementById("JoinBTN").style.display = "inline-block";
    document.getElementById("formPart").style.display = "block";
    document.getElementById("wrongNumber").style.display = "block";
  }
});

// When user enter Wrong number
document.getElementById("wrongNumber").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("wrongNumber").style.display = "none";
  document.getElementById("JoinBTN").style.display = "none";
  document.getElementById("accountExist").style.display = "none";
  document.getElementById("phoneContainer").style.display = "block";
  document.getElementById("formPart").style.display = "none";
});

// Function is validate  phoneNumber is already registered or not registered
async function validatePhone() {
  //Get the Value from phoneNumber input field
  previousNumber = document.getElementById("phoneNumber").value;
  document.getElementById("FphoneNumber").innerHTML = previousNumber;
  console.log(previousNumber);

  //Fecth Data from API
  let data = await fetch("http://localhost:5000/user/phone/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Phone: document.getElementById("phoneNumber").value,
    }),
  });

  //Save json data in variable
  data = await data.json();
  return data.msg;
}

// Function is validate the User detail. Check Details  correct or not
async function validateUser(e) {
  e.preventDefault();

  //Fetch Data from API
  let data = await fetch("http://localhost:5000/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Phone: document.getElementById("FphoneNumber").value,
      TUserName: document.getElementById("FTusername").value,
    }),
  });

  //Save json data in variable
  data = await data.json();
  // userValidate = data.msg;
  console.log(data.msg);
  if (data.msg) {
    alert("You have successfully Join telegram ");
  } else {
    alert("Please Enter Valid Creadentials ");
  }
}
