var div=document.createElement("div");
div.setAttribute("id","div");

var h1=document.createElement("h1");
h1.innerHTML="PROMISE TASK-MEME";
h1.style.textAlign="center";
h1.style.marginBottom="50px";
h1.style.marginTop="50px";
h1.style.backgroundColor="orange";

var container=document.createElement("div");
container.classList.add("container");
container.setAttribute("id","container");

var row=document.createElement("div");
row.setAttribute("id","row");
row.classList.add("row");

container.append(row);
div.append(container);
document.body.append(h1,div);
document.body.style.backgroundColor="lightblue";

function foo(){
        var res=new Promise((reslove,reject)=>{
        reslove("https://api.imgflip.com/get_memes");
    }).then((data)=>{
        res1(data)
    }).catch((error)=>console.log(error));
}
foo();

async function res1(value){
    var url=await fetch(value);
    var result=await url.json();
    console.log(result);
    for(var i=0;i<=99;i++){
        row.innerHTML+=`
        <div class="card" style="width: 20rem;margin-left:30px;margin-bottom:20px;">
            <img src="${result.data.memes[i].url}" class="card-img-top" style="height:200px;width:">
            <div class="card-body" style="text-align:center;">
                <h6><b>ID:</b> ${result.data.memes[i].id}</h6>
                <h6><b>MEME NAME:</b> ${result.data.memes[i].name}</h6>
            </div>
        </div>`;
    }
}


