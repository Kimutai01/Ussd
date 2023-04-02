fetch("http://127.0.0.1:3000/counties/1")
  .then((response) => response.json())
  .then((data) => {
    const constituency = data.constituencies;
    for (let i = 0; i < constituency.length; i++) {
      console.log(constituency[i].name);
    }
  });


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

if (text === "2*4*2") {
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

if (text === "2*4*3") {
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

if (text === "2*4*4") {
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

if (text === "2*4*5") {
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
