import { isArray } from "util";

export function greet(name){
    if(name === null){
        return("Hello, my friend");
    }
    if(isArray(name)){
        return("Hello " + name[0] + " and " + name[1])
    }
    if(name === name.toUpperCase()){
        return("HELLO " + name);
    }
    return("Hello " + name);
}
