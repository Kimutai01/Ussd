const express = require("express");

const router = express.Router();
const Credentials = {
  apiKey: "55e50196d7aef18ffb031c9e1997f8e28e1bd7964a98a79de58f7c3e4ab94d96",
  username: "mche1",
};
const AfricasTalking = require("africastalking")(Credentials);
const sms = AfricasTalking.SMS;

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

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message:
    //       "",
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `CON Welcome to Mche. Please select your county
      ${response}`;
  }
  if (text === "10") {
    const res = await fetch("http://127.0.0.1:3000/counties");
    const data = await res.json();
    for (let i = 9; i < 19; i++) {
      response += `${i + 1}. ${data[i].name}
          `;
    }

    response += `20. Next page`;

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }
  if (text === "10*20") {
    const res = await fetch("http://127.0.0.1:3000/counties");
    const data = await res.json();
    for (let i = 19; i < 29; i++) {
      response += `${i + 1}. ${data[i].name}
          `;
    }

    response += `30. Next page`;

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }
  if (text === "10*20*30") {
    const res = await fetch("http://127.0.0.1:3000/counties");
    const data = await res.json();
    for (let i = 29; i < 39; i++) {
      response += `${i + 1}. ${data[i].name}
          `;
    }

    response += `40. Next page`;

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }
  if (text === "10*20*30*40") {
    const res = await fetch("http://127.0.0.1:3000/counties");
    const data = await res.json();
    for (let i = 39; i < 47; i++) {
      response += `${i + 1}. ${data[i].name}
          `;
    }

    response = `CON Welcome to the County Health Information System. Please select your county
      ${response}`;
  }

  // mombasa

  if (text && !text.includes("*")) {
    const res = await fetch(`http://127.0.0.1:3000/counties/${text}`);
    const data = await res.json();
    const constituency = data.constituencies;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    // give this response on the first page only

    response = `CON Welcome to mche . Please select your constituency
      ${response}`;
  }

  // 1st constituency
  if (text === "1*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "1*1*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*1*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*1*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*1*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*1*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // constituency 2
  if (text === "1*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "1*2*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*2*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*2*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*2*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*2*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // constituency 3
  if (text === "1*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "1*3*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*3*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*3*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*3*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*3*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // constituency 4
  if (text === "1*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "1*4*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*4*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*4*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*4*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*4*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // constituency 5
  if (text === "1*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "1*5*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*5*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*5*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*5*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*5*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // constituency 6
  if (text === "1*6") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "1*6*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*6*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*6*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*6*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*6*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // 2. Kwale

  if (text === "2*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "2*1*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*1*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*1*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*1*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*1*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // constituency 2
  if (text === "2*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "2*2*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*2*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*2*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*2*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*2*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // constituency 3
  if (text === "2*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "2*3*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*3*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*3*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*3*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "2*3*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  // constituency 4
  if (text === "2*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops;
    for (let i = 0; i < constituency.length; i++) {
      response += `${i + 1}. ${constituency[i].name}
      `;
    }

    response = `CON Please select your constituency
      ${response}`;

    // response = `END Thank you for using mche`;
  }

  if (text === "2*4*1") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[1].description;
    const name = data.crops[1].name;

    async function sendSms() {
      const res = await fetch("http://127.0.0.1:3000/counties/1");
      const data = await res.json();
      const options = {
        to: [phoneNumber],
        message: ` ${name}
        ${data.crops[1].site_selection}
        
        `,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*4*2") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[2].description;
    const name = data.crops[2].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*4*3") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[3].description;
    const name = data.crops[3].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*4*4") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[4].description;
    const name = data.crops[4].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }

  if (text === "1*4*5") {
    const res = await fetch(`http://127.0.0.1:3000/counties/1`);
    const data = await res.json();
    const constituency = data.crops[5].description;
    const name = data.crops[5].name;

    // async function sendSms() {
    //   const res = await fetch("http://127.0.0.1:3000/counties/1");
    //   const data = await res.json();
    //   const options = {
    //     to: [phoneNumber],
    //     message: ` ${name}
    //     ${data.crops[2].site_selection}

    //     `,
    //   };
    //   sms
    //     .send(options)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // sendSms();

    response = `END You will recieve the details shortly on your phone
      ${response}`;
  }


  // Print the response onto the page so that our SDK can read it
  res.set("Content-Type: text/plain");
  res.send(response);
  // DONE!!!
});

module.exports = router;
