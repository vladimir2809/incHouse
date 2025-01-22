window.addEventListener('load',function(){
    var checkbox=document.getElementById('checkbox-menu');
    var basket=document.getElementById('basket');
    checkbox.addEventListener('click',function(){

        if (checkbox.checked)
        {
            basket.style.display='none';
        }
        else
        {
            basket.style.display='block';
        }
    })
});