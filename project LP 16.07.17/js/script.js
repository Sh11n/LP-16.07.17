/*задача
при клике по кнопке, создать див в определенной области
*/
function addElem(){ //add hide blcok
    var find = document.getElementById('outPutBlock');
    var div = document.createElement('div');
    var p = document.createElement('p');
    div.style.backgroundColor = "white";
    div.style.width = "98%";
    div.style.marginLeft = "2%";
    div.style.marginTop = "2%";
    div.style.height = "60px";
    div.style.padding = "10px";
    div.style.display = "none";
    div.id = "divHide";
    p.id = "pHide";
    div.appendChild(p);
    find.appendChild(div);
  };
  
  addElem();
  
//onclick load doc 
document.getElementById('FindAGig').addEventListener('click', loadDoc);
 
  function loadDoc(){ //xmlhttpreauest, get to serv
    var XHTTP = ("onload" in new XMLHttpRequest())? XMLHttpRequest : XDomainRequest;
    var xhttp = new XHTTP(); 
    
    xhttp.open("GET", "http://demos.wonderkidstudio.com/sites/crud/api/index.php?/api", true);
    xhttp.onload = function(){
      document.getElementById('pHide').innerHTML = JSON.parse(this.responseText);
    }
    xhttp.onerror = function(){
       document.getElementById('pHide').innerHTML = 'Ошибка ' + this.status;
    }
    xhttp.send();
  };
  
  
  //onclick hide block
  document.getElementById('outPutBlock').addEventListener('click', function(){
    var div = document.getElementById('divHide');
    var dStyle = div.style;
    
    if(dStyle.display == 'block'){
      dStyle.display = 'none';
    }else{
      dStyle.display = 'block';
    };
  });
  
  
  /*
  слушатель событий  оповещает о том что данные поступили и готовы
  xhttp.addEventListener("load", function() {
  console.log("Done:", req.status);
  */
   
    /*  
  function addElem(){ //добавляет блок на страницу
    var find = document.getElementById('outPutBlock');
    var div = document.createElement('div');
    div.style.backgroundColor = "white";
    div.style.width = "98%";
    div.style.marginLeft = "2%";
    div.style.marginTop = "2%";
    div.style.height = "60px";
    //div.style.display = "none";
    div.id = "divHide";
    find.appendChild(div);
  };
  
  addElem();
   */
   /*
   function loadDoc(){ //гет запрос на серв но не настроен
    var XHTTP = ("onload" in new XMLHttpRequest())? XMLHttpRequest : XDomainRequest;
    var xhttp = new XHTTP; 
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        document.getElementById('divHide').innerHTML = JSON.parse(this.responseText);
      }
    };
   */
    