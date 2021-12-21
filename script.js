function compute()
{ 
    /*To caluculate the values for interest we collect input data for deposited amount,
    rate percentage and numbers then calculate by 
    adding the variables interest and principal */
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount = interest + principal;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="<strong>If</strong> you deposit <mark>"+principal+"</mark>,\<br\> <strong>at</strong> an interest rate of <mark>"+rate+"%.</mark>\
    <br\> <strong>You</strong> will receive an amount of <mark>"+amount+"</mark>,\<br\> <strong>in</strong> the year <mark>"+year+"</mark>\<br\>"

    

}   
    function principalvalidation() {
    /* validation to make sure the input value of amount was not equal or less than zero*/
    var incorrectPrincipal = document.getElementById("principal").value;
    if (incorrectPrincipal <=0) {
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }
}
function updateRate()
{
    /*dynamically lets us change the rate slider*/
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

