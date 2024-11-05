var theCheckedIn = document.getElementById("checkedIn");
var theReserved = document.getElementById("reserved");
var theNewUser = document.getElementById("new");
const theTopContent = document.getElementById("topContent");
const theMidContent = document.getElementById("midContent");
const theBody = document.getElementById("theBody");
const theFarRight = document.getElementById("farRightContent");

function createScripts(email, local) {
  const theScript = document.createElement("script");
  theScript.setAttribute("src", "//fw-cdn.com/11222409/3936845.js");
  theScript.setAttribute("chat", "true");
  theScript.setAttribute("widgetId", "59290b01-6591-4d76-9981-17f6e78a036f");
  theScript.setAttribute("id", "scriptOne");
  theFarRight.appendChild(theScript);

  // window.fcWidget.on("widget:loaded", function () {
  //   const widgetIframe = document.querySelector("iframe#fc_frame"); // Check if the bot iframe has this ID

  //   widgetIframe.style.bottom = "600px"; // Adjust this value as needed to raise the bot higher on the screen
  // });

  const theScript2 = document.createElement("script");
  theScript2.innerHTML = `window.fwcrm.on("user:created", function () {
          window.fcWidget.user.setEmail("jean@gmail.com");
          window.fcWidget.user.setLocale("en");
        });`;

  //   theScript2.innerHTML = `window.fcSettings = {
  //   onInit: function() {
  //     //Check if user is logging out.
  //     if (window.location.href.indexOf('logout') != -1) {
  //         window.fcWidget.destroy();
  //         //Do Something
  //     }
  //     else {
  //         //Do Something Else
  //     window.fwcrm.on("user:created", function () {
  //          window.fcWidget.user.setEmail(${email});
  //          window.fcWidget.user.setLocale(${local});
  //        });
  //     }
  //   }
  // }`;

  theFarRight.appendChild(theScript2);
}

async function removeScript() {
  try {
    document.getElementById("scriptOne").remove;
    window.fcWidget.user.clear();
  } catch (error) {
    console.log("Issue with removeSCript");
    console.log(error);
  }
}

function hideStartingContent() {
  const theStartingContent = document.getElementById("startingContent");
  theStartingContent.classList.add("hide");
}

function createTopContent(status) {
  theTopContent.innerHTML = "";

  const theImage = document.createElement("img");
  theImage.style.width = "390px";
  theImage.style.height = "390px";
  console.log(status);

  switch (status) {
    case "checkedIn":
      console.log("checked in executed");
      theBody.style.backgroundColor = "var(--checkedInColor)";
      theImage.setAttribute("src", "./peep (3).png");
      break;

    case "reserved":
      console.log("reserved executed");
      theBody.style.backgroundColor = "var(--reservedColor)";
      theImage.setAttribute("src", "./peep (7).png");
      break;

    case "new":
      console.log("new executed");
      theBody.style.backgroundColor = "var(--newUserColor)";
      theImage.setAttribute("src", "./peep (10).png");
      break;

    default:
      console.log("nothing");
      break;
  }

  theTopContent.appendChild(theImage);
}

function createMidContent(status) {
  const theMidContent = document.getElementById("midContent");
  const theName = document.getElementById("name");
  const theEmail = document.getElementById("email");
  const theLang = document.getElementById("language");
  const theStatus = document.getElementById("status");

  theMidContent.classList.remove("hide");

  switch (status) {
    case "checkedIn":
      theName.innerText = "Jean Claude";
      theEmail.innerText = "jean@gmail.com";
      theLang.innerText = "English";
      theStatus.innerText = "Checked-in user";
      break;

    case "reserved":
      theName.innerText = "Anne Smith";
      theEmail.innerText = "anne@gmail.com";
      theLang.innerText = "French";
      theStatus.innerText = "Reserved user";
      break;

    case "new":
      theName.innerText = "Lee Park";
      theEmail.innerText = "Unknown";
      theLang.innerText = "Unknown";
      theStatus.innerText = "New user";
      break;

    default:
      break;
  }
}

function changeColor() {
  const theBody = document.querySelector("body");
}

theCheckedIn.addEventListener("click", () => {
  hideStartingContent();
  createTopContent("checkedIn");
  createMidContent("checkedIn");
  removeScript();
  createScripts("jean@gmail.com", "en");
});

theReserved.addEventListener("click", () => {
  hideStartingContent();
  createTopContent("reserved");
  createMidContent("reserved");
  removeScript();
  createScripts("anne@gmail.com", "fr");
});

theNewUser.addEventListener("click", () => {
  hideStartingContent();
  createTopContent("new");
  createMidContent("new");
  removeScript();
  createScripts("", "en");
});
