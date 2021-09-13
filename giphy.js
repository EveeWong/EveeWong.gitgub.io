fetch("http://api.giphy.com/v1/gifs/trending?api_key=QQM6eJZgeRgMV1oFdB1EMAF8MGljNRxF")
  .then((response) => response.json())
  .then((json) => displayGifs(json.data))
  .catch((err) => console.log("error: " + err));

function displayGifs(data) {
  var mainContainer = document.getElementById("gifContainer");
  for (var i = 0; i < 15; i++) {
    var div = document.createElement("div");
    console.log(data[i]);
    div.innerHTML = data[i].url;
    mainContainer.appendChild(div);
  }
}
