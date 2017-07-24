getElementById('outPutBlock').style.heigt = '300px';




/*
function onClick(){
  document.getElementById('#FindAGig').onclick =getListItem();
}


function getListItem(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
      document.getElementbyId("outPutBlock").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://demos.wonderkidstudio.com/sites/crud/api/index.php?/api", true);
  xhttp.send();
};