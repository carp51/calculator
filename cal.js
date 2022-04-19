//参考　https://qiita.com/yamazaki3104/items/b5351f589fb6644bf910
let ans = "";


function get_cal(a){
    if (a.value == "=") {
        const f = new Function( 'return ' + ans );
        document.getElementById("display").innerText = f().toString();
        ans = "";
    } else if (a.value == "C") {
        ans = "";
        document.getElementById("display").innerText = 0;
    } else if (a.value == "×") {
        ans = ans + "*";
        document.getElementById("display").innerText = ans;
    } else if (a.value == "÷") {
        ans = ans + "/";
        document.getElementById("display").innerText = ans;
    } else {
        ans += a.value;
        document.getElementById("display").innerText = ans;
    }
    console.log(ans);
}
