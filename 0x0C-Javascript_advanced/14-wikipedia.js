function createElement(data) {
  const p = document.createElement("P");
  p.innerText = data;

  document.querySelector("body").appendChild(p);
}

function queryWikipedia(callback) {
  const URL =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", URL, true);
  xhttp.send();
  xhttp.onload = () => {
    if (xhttp.status != 200)
      callback(`Error ${xhttp.status}: ${xhttp.statusText}`);
    else {
      const data = JSON.parse(xhttp.response).query.pages[21721040].extract;
      callback(null, data);
    }
  };
}

queryWikipedia(createElement);
