const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");
const link = document.getElementById("link");

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

let access = false;

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
  } else if (messageInput.value === "__link__" && access) {
    result.textContent = "";
    link.textContent = "<video dQw4w9WgXcQ>";
    access = false;
  } else if (messageInput.value === "__access__") {
    if (!access) {
      result.textContent = "You now have access to use __link__."; access = true
    } else {
      result.textContent = "You already have access to use __link__."
    };
    link.textContent = "";
  } else {
    link.textContent = "";
    result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  }

  messageInput.value = "";
});