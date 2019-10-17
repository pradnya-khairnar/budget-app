var income=[];
var expense=[];
var totalIncome=0;
var totalExpense=0;
var overallStatus=0;

var incomeBtn= document.querySelector(".btn-income");
var expenseBtn= document.querySelector(".btn-expense");
var resetBtn=document.querySelector(".btn-reset");

/*Reset Button*/
resetBtn.addEventListener('click',function(){
    totalIncome=0;
    totalExpense=0;
    overallStatus=0;
    income.length=0;
    expense.length=0;
    document.querySelector(".income").innerHTML='';
    document.querySelector(".expense").innerHTML='';
    document.querySelector(".final-amt").innerHTML='';
    document.querySelector(".total-income").innerText='';
    document.querySelector(".total-expense").innerText='';
});

/*Income Button*/
incomeBtn.addEventListener('click',arrPushIncome);

function arrPushIncome(){
    var inputStr= document.querySelector(".input-field").value;
    var inputArr= inputStr.split(",");

    if(inputArr.length<2){
        return;
    }
    
    income.push({text:inputArr[0],
                value:inputArr[1]
    });
    document.querySelector(".input-field").value='';
    let totalTempIncome=0;
    var listEl= income.map(function(el,index){
        totalTempIncome=parseInt(el.value)+totalTempIncome;
        return "<div class='desc'>"+el.text+"</div> <div class='amt'>Rs."+el.value+"</div><div class='close'>x</div>";
    });
    listEl = listEl.join("");
    document.querySelector(".income").innerHTML=listEl;
    totalIncome=totalTempIncome;
    document.querySelector(".total-income").innerText=totalIncome;

    overallStatus=totalIncome-totalExpense;
    var finlEl= document.querySelector(".final-amt");
    finlEl.innerText="Overall Status:"+overallStatus;
}

/*Expense Button*/
expenseBtn.addEventListener('click',arrPushExpense);

function arrPushExpense(){
    var inputStr= document.querySelector(".input-field").value;
    var inputArr= inputStr.split(",");

    if(inputArr.length<2){
        return;
    }

    expense.push({text:inputArr[0],
                value:inputArr[1]
    });
    document.querySelector(".input-field").value='';
    let totalTempExpense=0;
    var listEl= expense.map(function(el,index){
        totalExpense=parseInt(el.value)+totalExpense;
        totalTempExpense=parseInt(el.value)+totalTempExpense;
        return "<div class='desc'>"+el.text+"</div> <div class='amt'>Rs."+el.value+"</div><div class='close'>x</div>";
    });
    listEl = listEl.join("");
    document.querySelector(".expense").innerHTML=listEl;
    totalExpense= totalTempExpense;
    document.querySelector(".total-expense").innerText=totalExpense;

    /* overall status*/
    overallStatus=totalIncome-totalExpense;
    var finlEl= document.querySelector(".final-amt");
    finlEl.innerText="Overall Status:"+overallStatus;
}