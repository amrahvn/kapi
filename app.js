

let button=document.querySelector('#btn')

button.addEventListener('click',function(){

     
     

    if(document.getElementById('head').style.display==='none'){
        document.getElementById('head').style.display='inline-block'
    }else{
        document.getElementById('head').style.display='none'
    }
})

