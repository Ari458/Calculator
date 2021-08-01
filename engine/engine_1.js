const res = document.getElementById('result');
const operands = document.getElementsByClassName('digit');
const operators = document.getElementsByClassName('func');
const equal = document.getElementById('equal');
const clearScreen = document.getElementById('clear');
const back = document.getElementById('back');


const errorHandler= (result)=>{
    if(result.value=='Infinity' || result.value=='NaN'){
        result.value= "can't devide by zero";
    }
    else if(result.value=='undefined'){
        result.value="Input something...";
    }
}

const clrscr= (result)=>{
    if(result.value=='Infinity' || result.value=='NaN' || result.value=='undefined' || result.value=='Input something...' || result.value== "can't devide by zero"){
        result.value="";
    }
}


clearScreen.addEventListener('click', function () {
    res.value = "";
})


for (const operand of operands) {
    const val = operand.value;
    operand.addEventListener('click', function (val) {
        clrscr(res);
            res.value += operand.value;
    })
}

const plus= '(res.value).slice((res.value).length-1,(res.value).length)!="+"';
const minus= '(res.value).slice((res.value).length-1,(res.value).length)!="-"';
const multi= '(res.value).slice((res.value).length-1,(res.value).length)!="*"';
const divid= '(res.value).slice((res.value).length-1,(res.value).length)!="/"';
const deci= '(res.value).slice((res.value).length-1,(res.value).length)!="."';
const contiguous_operator = 'eval(plus) && eval(minus)&& eval(multi)&& eval(divid)&& eval(deci)';



for (const operator of operators) {
    const val = operator.value;
    operator.addEventListener('click', function (val){
    if(res.value!=""){
        if(eval(contiguous_operator)){
                res.value += operator.value;
            }
        }
   })
}

back.addEventListener('click', function () {
    result = res.value;
    res.value = result.substring(0, result.length - 1);
})




    equal.addEventListener('click', function () {
        result.value = eval(result.value);
        errorHandler(result);
    })


    document.onkeydown = function (e) {
        return false;
}
