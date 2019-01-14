abstract class Car {
    protected __miliege: number = 0;
    protected __fuel: number = 1000;
    public abstract newDrive(colvoM: number): void ;
    public abstract refuel(colvoM: number):void ;
}

class carStats extends Car{
    public newDrive(colvoM: number): void {
        if (colvoM > 0) {
            this.__miliege += colvoM;
            this.__fuel -= colvoM;
            if (this.__fuel <= 0 ) {
                alert('нужно заправится')
            }
        }
    };
    public refuel(colvoM: number):void {
        if (colvoM > 0) {
            this.__fuel += colvoM
        }
    }
    public get infoFuel () {
        return this.__fuel
    }
    public get infoMiliege () {
        return this.__miliege
    }
}