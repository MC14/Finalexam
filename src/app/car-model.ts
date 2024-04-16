export class CarModel {
  public carBrand?: string;
  public carModel?: string;
  public carColor?: string;
  public carEngine?: string;
  public carPrice?: number;
  public carId?: number;


  constructor(carModel: string, carColor: string, carEngine: string) {
    this.carBrand = 'Toyota';
    this.carModel = carModel;
    this.carColor = carColor;
    this.carEngine = carEngine;
    this.carPrice = this.random();
    this.carId = this.randomId();
  }


  random():number{
    return Math.floor(Math.random()* 60000) + 2000;

  }

  randomId():number{
    return Math.floor(Math.random()* 200000) + 10000;
  }
}
