import {CarModel} from "./car-model";
export class CarListService {


  carList:CarModel[] = [new CarModel('Camry','Red','4 Cylinder Engine'),
    new CarModel('Highlander','Yellow','3.5 Litre')];


  private cartList:CarModel[] = [];

  constructor() {

  }

  getCarList():object{
    return this.carList;
  }
}
