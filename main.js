var tablo = document.getElementById("tablo");
var input = document.getElementsByClassName("input");
var lblad = document.createElement("label");
var lblsoyad = document.createElement("label");
var lbltel = document.createElement("label");
var btn , btnsil; 
var flag = false;
//var tr = document.createElement("tr");
var tr,td,td1,td2,td3;
var sayac = 0;
// function ekle() {
    
//     var veri = "<td>"+ input[0].value+"</td>"
//              + "<td>"+ input[1].value+"</td>"
//              + "<td>"+ input[2].value+"</td>"
//              + "<td>"+butonekle()+"</td>";

//     tablo.innerHTML += "<tr>"+ veri +"</tr>";
//     //var edit = document.getElementById("edit");
//     //document.replaceChild("input","");

// }


function tdekle() {
    
    lblad.innerHTML = input[0].value;
    lblsoyad.innerHTML = input[1].value;
    lbltel.innerHTML = input[2].value;

    btn = document.createElement("button");
    btn.innerHTML = "DEGISTIR";
    btn.setAttribute("id",sayac);
    btn.setAttribute("onclick","degistir(this.id,tr.id)")
    btn.style.height = "25px";

    
    btnsil = document.createElement("button");
    btnsil.innerHTML = "SIL";
    btnsil.setAttribute("id",sayac);
    btnsil.setAttribute("onclick","sil(this)")
    btnsil.style.height = "25px";
    btnsil.style.width = "80px";

  tr = tablo.insertRow(-1);
  var satirid = "tr"+ sayac;
  tr.setAttribute("id",satirid);
  td = tr.insertCell(0);
  td1 = tr.insertCell(1);
  td2 = tr.insertCell(2);
  td3 = tr.insertCell(3);
  td.innerText = lblad.innerText;
  td1.innerText = lblsoyad.innerText;
  td2.innerText = lbltel.innerText;
  td3.appendChild(btn);
  td3.appendChild(btnsil);
  sayac += 1;
  
}     

function degistir(butonid,trid) {

  var satir = document.getElementById(trid.slice(0,2)+butonid);
  var btnid = document.getElementById(butonid);
  var a = document.createElement("input");

  if(btnid.innerHTML === "KAYDET") {
     if (flag == false) {
    satir.deleteCell(0);
    satir.insertCell(0).innerHTML = lblad.outerHTML;
    satir.deleteCell(1);
    satir.insertCell(1).innerHTML = lblsoyad.outerHTML;
    satir.deleteCell(2);
    satir.insertCell(2).innerHTML = lbltel.outerHTML;
    btnid.innerHTML = "DEGISTIR";
    
                        }
    else {
    lblad.innerText = satir.children[0].children[0].value;
    satir.deleteCell(0);
    satir.insertCell(0).innerHTML = lblad.innerText;
    lblsoyad.innerText = satir.children[1].children[0].value;
    satir.deleteCell(1);
    satir.insertCell(1).innerHTML = lblsoyad.innerText;
    lbltel.innerText = satir.children[2].children[0].value;
    satir.deleteCell(2);
    satir.insertCell(2).innerHTML = lbltel.innerText;
    btnid.innerHTML = "DEGISTIR";
    }
    
                                   }
  else {
   
    a.setAttribute("type","text");
    a.setAttribute("value",satir.children[0].innerText); 
     
    satir.deleteCell(0);
    satir.insertCell(0).innerHTML = a.outerHTML; 
      
    a.setAttribute("value",satir.children[1].innerText);
    satir.deleteCell(1);
    satir.insertCell(1).innerHTML = a.outerHTML;
         
    a.setAttribute("value",satir.children[2].innerText);
    satir.deleteCell(2);
    satir.insertCell(2).innerHTML = a.outerHTML;
         
    btnid.innerHTML = "KAYDET"
       }           
       flag = true;
            }
            
function sil(btn){
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

