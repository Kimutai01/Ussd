const express = require("express");

const router = express.Router();

// Fetching data from http://127.0.0.1:3000/counties and setting a variable to it which is counties

router.post("/", async (req, res) => {
  // Read variables sent via POST from our SDK
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  console.log("####################", req.body);
  let response = "";

  if (text === "") {
    const res = await fetch("http://127.0.0.1:3000/counties");
    const data = await res.json();
    console.log(text);
    for (let i = 0; i < 9; i++) {
      response += `${i + 1}. ${data[i].name}
        `;
    }
    response += `10. Next page`;

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }
  if (text === "10") {
    for (let i = 9; i < 19; i++) {
      response += `${i + 1}. ${data[i].name}
          `;
    }

    response += `20. Next page`;

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }
  if (text === "10*20") {
    for (let i = 19; i < 29; i++) {
      response += `${i + 1}. ${data[i].name}
          `;
    }

    response += `30. Next page`;

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }
  if (text === "10*20*30") {
    for (let i = 29; i < 39; i++) {
      response += `${i + 1}. ${data[i].name}
          `;
    }

    response += `40. Next page`;

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }
  if (text === "10*20*30*40") {
    for (let i = 39; i < 47; i++) {
      response += `${i + 1}. ${data[i].name}
          `;
    }

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }
  console.log(text);
  if (text === "1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/${text}`);
    const data = await res.json();
    const constituency = data.constituencies;
    for (let i = 0; i < constituency.length; i++) {
      console.log(response);
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Welcome to mche . Please select your constituency
      ${response}`;
  }

  // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
  // DONE!!!
});

module.exports = router;
