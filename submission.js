//Task 1, Tutorial 2


let even_predicate = function (value)
{ 
    let num = Number(value); 

    return Number.isInteger(num) && (num%2) === 0; // check if value is even (divisible by 2), return true if even and false for anything else 

    
};

let odd_predicate = function (value)
{ 
    let num = Number(value);
    return Number.isInteger(num) && (num%2) !== 0; // check if value is odd (not divisible by 2), return true if odd and false for anything else 
   
};

let undefined_predicate = function (value)
{
    return value === undefined; // Check and return a boolean value to indicate whether the given value is undefined.

};

let null_predicate = function (value)
{
    return value === null; // Check and return a boolean value to indicate  whether the given value is null.
    
};


let check = function (predicate,value)
{
    return predicate (value);
    // Apply the predicate function to the value and return the result.
};


// Task 2, Tutorial 2

let getDictionary = function (lang)
{

    //The input to englishDictionary will be a number.
    let englishDictionary = function (number)
    {
        // Use the switch-case statement to return the name that corresonds to the number in English 
        case 1:
            return "one";
            case 2:
                return "two";
                case 3:
                    return "three";
                    default:
                        return "not included in dictionary";
    }

    //The input to frenchDictionary will be a number.
    let frenchDictionary = function (number)
    {
        // Use the switch-case statement to return the name that corresonds to the number in French  
        case 1:
            return "un";
            case 2:
                return "deux";
                case 3:
                    return "trois";
                    default:
                        return "not included in dictionary";
    }

    lang = lang.toLowerCase (); // change input into lowercase 

    if (lang == "e" || lang == "english")
    {
        return englishDictionary; // output this method if user inputs e or english
    }
    else 
    {
        return frenchDictionary; //else output french dictionary method 
    }
}

// Testing if tutorial 3, task 2 works  

let english = getDictionary ("english");
console.log(english (1));
console.log (english(3));

let french = getDictionary ("f");
console.log(french (1));
console.log (french(3));
