class Vehicle{

    constructor(make, model, year){
        this.make = make;
        this.model= model;
        this.year= year;
    }//constructor

    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}//vehicle

//invoke class
//let myVehicle = new Vehicle('VW', 'Golf', 2008);
//let info = myVehicle.Information();


class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }//constructor


    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }//Information

}//cars

let myCar = new Cars('MINI', 'CountryMan', 2014, 5);
myCar.Information();