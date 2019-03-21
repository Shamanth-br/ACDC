var flag=0;
var count=-1;
function addimage()
{  
     var add= document.getElementById("pic").files[0].name;
     var i1=createimage(add);
     var pn=document.getElementById("parentnode");
     var cn1 = document.getElementById("child1");
     
     if(flag==0)
     {
          pn.insertBefore(i1, null);
          flag=1;
          var br = document.createElement("BR");
          pn.appendChild(br, i1);
          var add2="Facebook_like_thumb.png";
          var i2 = createimage2(add2);
          parentnode.appendChild(i2,i1);
          i2.setAttribute('onclick','changeimage(i2);'); 
          i2.onclick = function() {changeimage(i2);};
          var ta = document.createElement("TEXTAREA");
          ta.setAttribute('rows',4);
          ta.setAttribute('placeholder','comment');
          pn.appendChild(ta);
         
          }
     else{
          var node = document.getElementsByTagName("IMG");
          pn.insertBefore(i1,node[0]);
          var add2="Facebook_like_thumb.png";
          var append = node[count];
          var i2 = createimage2(add2);
          i2.onclick = function() {changeimage(i2);}; 
          pn.insertBefore(i2,node[1]);
          pn.appendChild(document.createElement("br"));
          var ta = document.createElement("TEXTAREA");
          ta.setAttribute('rows',4);
          ta.setAttribute('placeholder','comment');
          pn.insertBefore(ta,node[1]);
     }

     
}

function changeimage(i2)
{
     var image = document.getElementById("like");
     if(i2.src.match("Facebook_like_thumb.png")){
          i2.src="like_PNG89.png";
     }
     else
     {
          i2.src="Facebook_like_thumb.png";
     }
}

function createimage(add){
     var image = document.createElement("IMG");
     image.setAttribute("src", add);
     image.setAttribute("width", "500");
     image.setAttribute("height", "228");
     count++;
     return image;
}
function createimage2(add){
     var image = document.createElement("img");
     image.setAttribute("src", add);
     image.setAttribute("width", "50");
     image.setAttribute("height", "50");
     count++;
     return image;

} 
