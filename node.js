
//YouTube 

//need for making the youtube
//url 
//fetch();


function main(){
    var Info = document.querySelector("#search").value;
   

    
    console.log(Info);
    showdata(Info);


    }


    

 
  async function showdata(Info) {
        var api_key = "AIzaSyDCX3r9SN6bjIa3UXri9WbWqlDuf9SNcSk";
       var data =  `https://youtube.googleapis.com/youtube/v3/search?part=%40snippet&maxResults=50&q=${Info}&key=${api_key}`;
       console.log(data);


//    var data =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${Info}&key=${api_key}`;
   let data_Info = await fetch(data);
   let res = await data_Info.json();
//    console.log("res",res)
  
   console.log(res.items);
  
//    console.log(res.items:{snippet={thumbnails={default.url}}});

   app(res.items)


    }

    function append(info) {
let container = document.querySelector("section");

container.innerText = null;


info.forEach(({id:{videoId},snippet:{title,channelTitle,thumbnails:{default:{url}}}})=>{
   

  console.log(title)
    let iframe = document.createElement("iframe");
    let div = document.createElement("div");
    div.setAttribute("id","div");
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

    
    div.append(image,img_info,h3,name);


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




//video id

/* <iframe width="560" height="315" src="https://www.youtube.com/embed/yUaJCjiPBnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */













/*


<iframe width="560" height="315" src="https://www.youtube.com/embed/XjnvEw-iFDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/








// channelId: "UCDj9lVVxAWdeUZjB3Um39Vg"
// channelTitle: "Funny Family"
// description: "Hello Dear Viewers, This is a funny videos channel. We make funny videos in our village. Because We are live in village. Director ..."
// liveBroadcastContent: "none"
// publishTime: "2022-05-22T03:00:31Z"
// publ

// document.getElementsByClassName("trend").addEventListener("click",reload);
// function reload(){
//     window.location.reload();

// }
document.querySelector(".trend").addEventListener("click",reload);

 function reload(){
        window.location.reload();
    
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
let container = document.querySelector("section");

container.innerText = null;


info.forEach(({id,snippet:{title,channelTitle,thumbnails:{default:{url}},publishedAt}})=>{


console.log(title)
let iframe = document.createElement("iframe");
let div = document.createElement("div");
div.setAttribute("id","div");
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


