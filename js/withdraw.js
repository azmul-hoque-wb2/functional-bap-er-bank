


document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWidthdrawAmount = getInputFieldVlaueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWidthdrawAmount;
    setTextElementValueById('withdraw-total',newWithdrawTotal );

   const previousBalanceTotal = getTextElementValueById('balance-total');
   const newBalanceTotal = previousBalanceTotal - newWidthdrawAmount ;
    setTextElementValueById('balance-total', newBalanceTotal);

})