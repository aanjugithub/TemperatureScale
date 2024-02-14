
function degreetoFh(){
    let degreecel=+box1.value
    let result= (degreecel*(9/5) + 32) 
    box2.value=result
}

function fhtoDegree(){
    let fh=+box2.value
    let result=((fh-32)*(5/9))
    box1.value=result
}