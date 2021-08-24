
function toggleChange(event){
    if(event !== 'theme-one'){
        document.getElementById('body').className=event;
    }else{
        document.getElementById('body').className='';
    }
}