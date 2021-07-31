let scanner = new Instascan.Scanner({ video: document.getElementById('video-preview'), facingMode: { exact: 'environment' }, mirror: false });
scanner.addListener('scan', function (content) {

  if (content.substring(0, 3) == "HC1") {
    $.post("/request",
      {
        name: content

      },
      function (data, status) {
        const obj = JSON.parse(data);
        obj.information = new Date(obj.information);
        document.getElementById("page-1").style.display = "none";
        document.getElementById("page-2").style.display = "block";
        // document.getElementById("result").innerHTML = obj.v[0].dn;
        document.getElementById("result-icon").innerHTML = "<i class='bi bi-check-circle-fill' style='font-size: 200px; color: green;'></i>"
        document.getElementById("result-value").innerHTML = "<h2 > Name: </h2>"
        document.getElementById("result-name").innerHTML = "<p>" + obj.nam.fn + " " + obj.nam.gn + "</p>";
      }
    );
  }
  else {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "block";
    document.getElementById("result-icon").innerHTML = "<i class='bi bi-x-circle-fill' style='font-size: 200px; color: red;'></i>";
    document.getElementById("result-value").innerHTML = "<h2 >Not valid</h2>"
    document.getElementById("result-name").innerHTML = "";
  }
});

Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    //If the user has a rear/back camera
    if (cameras[1]) {
      //use that by default
      scanner.start(cameras[cameras.length - 1]);

    } else {
      //else use front camera
      scanner.start(cameras[0]);

    }
  } else {
    //if no cameras are detected give error
    console.error('No cameras found.');
  }
}).catch(function (e) {
  document.getElementById("error-handler").innerHTML = e;

});

function browsepage() {
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-1").style.display = "block";
}
