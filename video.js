var Info = JSON.parse(localStorage.getItem("Info"));
console.log(Info);
var arr = [];
arr.push(Info)
displayData(arr);


function displayData(Info){
   var section =  document.querySelector("#section");
   section.innerText = null

    Info.forEach((elem)=>{
    iframe = document.createElement("iframe");
    iframe.setAttribute("id","frame");


    iframe.src= `https://www.youtube.com/embed/${elem.video}` ;
iframe.allow = "fullscreen";
let h3 = document.createElement("h3");
let name = document.createElement("h3");
h3.setAttribute("class","title");
name.setAttribute("class","title");



h3.innerText = elem.name;
name.innerText = elem.fullname;
let div = document.createElement("div");
div.setAttribute("id","box");


div.append(iframe,h3,name);
small(elem.fullname);


section.append(div);


    })
}

document.getElementById("logo").addEventListener("click",run);
function run(){
    window.location.href = "index.html"
}
document.getElementById("img").addEventListener("click",program);
function program(){
    window.location.href = "index.html";
    
}







function main(){
    var Info = document.querySelector("#search").value;
   

    
    console.log(Info);
    showdata(Info);


    }


    

 
  async function showdata(Info) {
        var api_key = "AIzaSyDCX3r9SN6bjIa3UXri9WbWqlDuf9SNcSk";
       var data =  `https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&maxResults=20&q=${Info}&key=${api_key}`;
       console.log(data);


//    var data =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${Info}&key=${api_key}`;
   let data_Info = await fetch(data);
   let res = await data_Info.json();
   console.log("res",res)
  
   console.log(res.items);
  
//    console.log(res.items:{snippet={thumbnails={default.url}}});

   append(res.items)


    }

    function append(info) {
let container = document.querySelector("#grid");

container.innerText = null;


info.forEach(({id:{videoId},snippet:{title,channelTitle,thumbnails:{default:{url}}}})=>{
   

  console.log(title)
    let iframe = document.createElement("iframe");
    let div = document.createElement("div");
    div.setAttribute("id","div1");
let image = document.createElement("img");
image.src = url;

let img_info  =  `https://www.youtube.com/embed/${videoId}`;

    iframe.src =img_info
    
    iframe.allow = "fullscreen"
    let h3 = document.createElement("h3");
    let name = document.createElement("h3");
    name.innerText = channelTitle;

    h3.setAttribute("id","h3")
    h3.innerText= title;

    
    div.append(iframe,h3,name);


    var obj = {
        video :videoId,
        name:title,
        fullname : channelTitle

    }
    div.addEventListener("click",function(){
        jump(obj);

    })
    container.append(div);


})
    }





function jump(obj){
    localStorage.setItem("Info",JSON.stringify(obj));
    window.location.href = "video.html";

}



show();

 
async function show() {
    Info = "news"
    var api_key = "AIzaSyDCX3r9SN6bjIa3UXri9WbWqlDuf9SNcSk";
   var data =  `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=20&chart=mostPopular&regionCode=IN&key=${api_key}`;
   console.log(data);


//    var data =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${Info}&key=${api_key}`;
let data_Info = await fetch(data);
let res = await data_Info.json();
console.log("res",res)
console.log(res.items);

//    console.log(res.items:{snippet={thumbnails={default.url}}});

app(res.items)


}

function app(info) {
// let container = document.querySelector("section");
let container = document.querySelector("#grid");


container.innerText = null;


info.forEach(({id,snippet:{title,channelTitle,thumbnails:{default:{url}},publishedAt}})=>{


console.log(title)
let iframe = document.createElement("iframe");
let div = document.createElement("div");
div.setAttribute("id","div1");
let image = document.createElement("img");
image.src = url;

let img_info  =  `https://www.youtube.com/embed/${id}`;

iframe.src =img_info

iframe.allow = "fullscreen"
let h3 = document.createElement("h3");
let name = document.createElement("h3");
name.innerText = channelTitle;
name.setAttribute("id","name")

h3.setAttribute("id","h3")
h3.innerText= title;

p = document.createElement("p");
p.innerText = publishedAt;

div.append(iframe,h3,name);


var obj = {
    video :id,
    name:title,
    fullname : channelTitle,


}
div.addEventListener("click",function(){
    gone(obj);

})
container.append(div);


})
}





function gone(obj){
localStorage.setItem("Info",JSON.stringify(obj));
window.location.href = "video.html";

}









async function small(Info){
    var api_key = "AIzaSyDCX3r9SN6bjIa3UXri9WbWqlDuf9SNcSk";
    var data =  `https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&maxResults=20&q=${Info}&key=${api_key}`;


    let res = await fetch(data);
    let out = await res.json();


    console.log(Info,"    ",out);
    cornerShow(out.items);


}

function cornerShow(data){
var container = document.querySelector("#main_box");
container.innerText = null;
console.log(data,"data")

data.forEach(({id:{videoId},snippet:{title,channelTitle,thumbnails:{default:{url}},publishedAt}})=>{



    let iframe = document.createElement("iframe");
    iframe.setAttribute("id","iframe")
let div = document.createElement("div");
div.setAttribute("id","div2");
let image = document.createElement("img");
image.setAttribute("id","image")
image.src = url;

let img_info  =  `https://www.youtube.com/embed/${videoId}`;

iframe.src =img_info

iframe.allow = "fullscreen"
let h3 = document.createElement("h3");
let name = document.createElement("h3");
name.innerText = channelTitle;
name.setAttribute("id","name1")

h3.setAttribute("id","head")
h3.innerText= title;

p = document.createElement("p");
p.innerText = publishedAt;
div.addEventListener("click",function(){
    showfullscreen(videoId,title,channelTitle)
});


div.append(image,h3,name)
container.append(div)


})

   
}

function showfullscreen(data1,data2,data3){
    console.log(data1,data2,data3)
    container = document.getElementById("section");
    container.innerText = null
    


    var iframe = document.createElement("iframe");
    iframe.setAttribute("id","iframe1")

    let img_info  =  `https://www.youtube.com/embed/${data1}`;
iframe.src = img_info;
let div = document.createElement("div");
div.setAttribute("id","div22");
iframe.allow = "fullscreen"

let name = document.createElement("h3");
name.innerText =data3;
name.setAttribute("id","name12")
h3 = document.createElement("h3")
h3.setAttribute("id","head2")
h3.innerText=data2;
div.append(iframe,h3,name);
container.append(div)




 


    

}