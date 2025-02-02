window.addEventListener('load',function(){
    var checkbox=document.getElementById('checkbox-menu');
    var basket=document.getElementById('basket');
    var france=document.getElementById('France');
    var germany=document.getElementById('Germany');
    var england=document.getElementById('England');
    let cardFranceArr=document.getElementsByClassName('card_country_france')
    let cardGermanyArr=document.getElementsByClassName('card_country_germany')
    let cardEnglandArr=document.getElementsByClassName('card_country_england')
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
    france.addEventListener('click', function(){
        //alert('fracnce');
        if (france.checked)
        {
            displayNoneAll();
            for (let i=0;i<cardFranceArr.length;i++)
            {
                //console.log (cardFranceArr[i]);
                cardFranceArr[i].style.display='block'
            }
        }
    });
    germany.addEventListener('click', function(){
        //alert('fracnce');
        if (germany.checked)
        {
            displayNoneAll();
            for (let i=0;i<cardGermanyArr.length;i++)
            {
                //console.log (cardFranceArr[i]);
                cardGermanyArr[i].style.display='block'
            }
        }
    });
    england.addEventListener('click', function(){
        //alert('fracnce');
        if (england.checked)
        {
            displayNoneAll();
            for (let i=0;i<cardEnglandArr.length;i++)
            {
                //console.log (cardFranceArr[i]);
                cardEnglandArr[i].style.display='block'
            }
        }
    })
    function displayNoneAll()
    {
        for (let i=0;i<cardFranceArr.length;i++)
        {
            cardFranceArr[i].style.display='none'
        }
        
        for (let i=0;i<cardGermanyArr.length;i++)
        {
            cardGermanyArr[i].style.display='none'
        }
        for (let i=0;i<cardEnglandArr.length;i++)
        {
            cardEnglandArr[i].style.display='none'
        }    
    }
});

