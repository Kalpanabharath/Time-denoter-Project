let arr=[]
let galarr=storage()
console.log(galarr)

function addli(){
    let useinEl=document.getElementById("usein").value
    let time = new Date().toLocaleTimeString();
    let tdaydate =new Date().toLocaleDateString()
   
    if (useinEl==""){
          alert("please Enter input felid");
    }else{
    let obj={
        activity:useinEl,
        tdtime:time,
        tddate:tdaydate

    }
    arr.push(obj)
    createli(obj)
    document.getElementById("usein").value="";
  
}
}

function createli(obj){
  
let divEl=document.createElement('div');
divEl.id="userinp";
let containerEl=document.getElementById('container');
containerEl.appendChild(divEl);
let liEl=document.createElement('li');
liEl.id="noted";
liEl.textContent= obj.tdtime ;
divEl.appendChild(liEl);
let liElsec=document.createElement('li');
liElsec.id="thistm";
liElsec.textContent=obj.activity;
divEl.appendChild(liElsec);


}


function savefun(){
    let containerEll=document.getElementById('container');
    if (containerEll.children.length <= 0){
        alert("enter input felid")
    }

    localStorage.setItem("todoobj",JSON.stringify(arr))
    containerEll.innerHTML=""
}
function storage(){
let loobj=localStorage.getItem("todoobj");
let store=JSON.parse(loobj)
if(store===null){
    return []
}else{
    return store
}
}    

function gallary(){

   
    let noneEl=document.getElementById("none");
    document.body.removeChild(noneEl);


    let secdiv=document.createElement('div');
    secdiv.id="addindex";
    document.body.appendChild(secdiv);


    let iEl=document.createElement("i");
    iEl.classList.add("fa-solid", "fa-arrow-left-long")
    secdiv.appendChild(iEl);
    iEl.onclick=function(){
        document.body.removeChild(secdiv);
        document.body.appendChild(noneEl);
 
    }


    let tdiv=document.createElement('div');
    tdiv.id="tdiv";
    secdiv.appendChild(tdiv);


    for(let a of galarr){
        
        galldiv(a)
        
        
    }
    function galldiv(a){


        fdiv=document.createElement('div');
       fdiv.id="fdiv";
       tdiv.appendChild(fdiv);
   
   
       let lione=document.createElement('li');
       lione.id="lione";
       lione.textContent=a.tdtime;
       fdiv.appendChild(lione)
   
       let litwo=document.createElement('li');
       litwo.id="litwo";
       litwo.textContent=a.activity;
       fdiv.appendChild(litwo)
   
   
       let lithree=document.createElement('li');
       lithree.id="lithree";
       lithree.textContent=a.tddate;
       fdiv.appendChild(lithree)
   }
}

    



