function verify(password){
    if(password == null || password.length < 8){
        return "Password rejected";
    }
    else if(!/[A-Z]/.test(password)){
        return "Password rejected";
    }
    else if(!/[0-9]/.test(password)){
        return "Password rejected";
    }
    else{
        return 'Password accepted';
    }
}

console.log(verify("ej"));
console.log(verify(null));
console.log(verify("helloworld"));
console.log(verify("HelloWorld"));
console.log(verify("HelloWorld1"));
console.log(verify("HELLOWORLD223"));