import { isArray } from "util";

export function greet(name){
    if(name === null){
        return("Hello, my friend");
    }
    if(isArray(name)){
        if(name.length === 2){
            return("Hello " + name[0] + " and " + name[1])
        }
        var nameList = name;
        var lastName = nameList.pop();
        var stringOfNames = "";
        nameList.forEach(person => {
            if(stringOfNames === ""){
                stringOfNames += person
            }
            else{
                stringOfNames += ", " + person
            }
        });
        return("Hello " + stringOfNames + " and " + lastName)
    }
    if(name === name.toUpperCase()){
        return("HELLO " + name);
    }
    return("Hello " + name);
}
