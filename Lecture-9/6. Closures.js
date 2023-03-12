function OuterFun() {
    let money = 100;
    function innerFun() {
        money++;
        console.log(money);
    }
    return innerFun;
}

let fun = OuterFun();
let fun1 = OuterFun();

fun();
fun();
fun();
fun();

fun1();
fun1();