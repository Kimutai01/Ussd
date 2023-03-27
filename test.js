fetch("http://127.0.0.1:3000/counties/1")
  .then((response) => response.json())
  .then((data) => {
    const constituency = data.constituencies;
    for (let i = 0; i < constituency.length; i++) {
      console.log(constituency[i].name);
    }
  });
