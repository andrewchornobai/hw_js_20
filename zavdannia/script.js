const getId = id => document.getElementById(id);
let f1 = document.forms.form1;
getId('bth_add_user').addEventListener('click', ()=> {
    let i = 0;
    let login = f1.login.value;
    let password = f1.password.value;
    let email = f1.email.value;
    let all = {login,password,email}
    arr[i] = all;
    console.log(arr);
    getId('some_user').innerHTML = `${arr[i].all.login} ${arr[i].all.password} ${arr[i].all.email}`;
});
