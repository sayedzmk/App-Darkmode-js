let body =document.body;
let btn =document.querySelector('button');
let h1 =document.querySelector('h1');
let show =document.querySelector('.myclick');
let div = document.querySelector('.div');
let remov=document.querySelector('.myclose');
let addd= document.querySelector('.add')
let input =document.querySelector('input');
let parph = document.querySelector('p');
let del =document.querySelector('.delete');
let darkMode = ()=>{
    if(body.classList.toggle("dark")){
        btn.classList ="mybtn btn btn-light fas fa-lightbulb";
        h1.style.color="#0080ff"
        div.style.background="gray";
    } else{
        btn.classList ="mybtn btn btn-dark fas fa-moon";
        h1.style.color = '';
        div.style.background='';

    }
}
let action =()=>{
    if(div.classList.toggle("none")){
        div.style.display="block";
    }
    else{
        div.style.display="none";
    }
}

let delet =()=>{
    div.style.display="none";
    input.value="";
}
let addpraph =()=>{
    if(parph.classList.toggle("p")){
        p=input.value;
        parph.textContent=p;
        del.style.display="block";
    }
}
let delpaph =()=>{
    parph.textContent="No data Added Yet";
    del.style.display="none";
}
del.addEventListener('click',delpaph);
addd.addEventListener('click',addpraph);
remov.addEventListener('click',delet);
btn.addEventListener('click',darkMode);
show.addEventListener('click',action);
/** end */