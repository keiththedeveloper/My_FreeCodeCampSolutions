/* Alter code below this line */
class Thermostat{
    constructor(temp){
this._temp=temp;
    }
    get temperature(){
        return (5/9*(this._temp-32));
    }
    set temperature(temp){
this._temp=temp;
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
