let body =document.body;
let btn =document.querySelector('.mybtn');
let h1 =document.querySelector('h1');
let show =document.querySelector('.myclick');
let div = document.querySelector('.show');
let remov=document.querySelector('.myclose');
let addd= document.querySelector('.add')
let input =document.querySelector('input');
let parph = document.querySelector('.div2');
let del =document.querySelector('.delete');
let taskes=document.querySelector('.taskes');
let closeMessage=document.getElementById('closeMessage');
let invalid=document.getElementById('invalid');
let darkMode = ()=>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
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
    div.classList.toggle("none");
    input.value="";
}

let close =()=>{
    div.classList.add('none');
    input.value="";
}

let addTask =()=>{
    let inputData=input.value;
    if(inputData.trim() == 0 || inputData.length < 3 || inputData.length > 20){
        invalid.classList.remove('none');
    }else{
        parph.classList.add('none');
        taskes.innerHTML += `<div class=' del div3 my-4 '> ${inputData}
        <button  class='delete float-right my-2  mx-2 btn btn-danger'> Delete </button>
        </div>`;
    }
    taskes.addEventListener('click', function (r) {
        if (r.target.classList.contains('del')) {
            r.target.classList.toggle('remov');
        }
    })
    input.value="";
    //parph.innerText=inputData;
    // let newDiv=document.createElement('div');
    // newDiv.classList='div3 my-4';
    // newDiv.append(inputData);
    // taskes.append(newDiv);
}
let closeMessageInvalid=()=>{
    invalid.classList.add('none');
}
let delpaph =()=>{
    parph.textContent="No data Added Yet";
    del.style.display="none";
}
let showNoTasks = () => {
    if (taskes.childElementCount == 0) {
        parph.classList.remove('none');
    }
}
let deleteTask = (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        showNoTasks();
    }
}

document.addEventListener('click', deleteTask)
addd.addEventListener('click',addTask);
remov.addEventListener('click',close);
btn.addEventListener('click',darkMode);
show.addEventListener('click',action);
closeMessage.addEventListener('click',closeMessageInvalid)

/** end */