class BMI {

    constructor(height, weight){
        this.height= height;
        this.weight = weight;
    }//constructor

    calculateBMI(){

        let bmi = this.weight/(this.height**2);
        return bmi;

    }//calculateBMI

}//BMI

let MyBmi = new BMI(2,90);
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI);