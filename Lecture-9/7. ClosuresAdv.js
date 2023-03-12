function OuterFun(){
    let money = 100;
    function InnerFun() {
        money++;
        function innerMostFun() {
            money++;
            console.log(money);
        }
        return innerMostFun;
    }
    return InnerFun;
}

let fun = OuterFun();
let fun1 = fun();
let fun2 = fun();

fun1();
fun1();
fun1();
fun2();
fun2();