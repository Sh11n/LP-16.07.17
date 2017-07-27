/*задача
при клике по кнопке, создать див в определенной области
*/
var button1 = document.getElementById('FindAGig');
    
    button1.addEventListener('click', show, loadDoc());
    
  function addElem(){
    var find = document.getElementById('outPutBlock');
    var div = document.createElement('div');
    
    div.style.backgroundColor = "white";
    div.style.width = "98%";
    div.style.marginLeft = "2%";
    div.style.height = "60px";
    div.style.display = "none";
    div.id = "divHide";
    find.appendChild(div);
  };
  
  function show(){
    var div = document.getElementById('divHide');
    div.style.display = "block";
  };
 
  function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        document.getElementById('divHide').innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "http://demos.wonderkidstudio.com/sites/crud/api/index.php?/api?/products/id30", true);
    xhttp.send();
  };
  
  addElem();
  
  /*
  слушатель событий  оповещает о том что данные поступили и готовы
  xhttp.addEventListener("load", function() {
  console.log("Done:", req.status);
  */