export class Storage{
    id:string;
    name:string;
    totalQuantity:number;
    productCost:number;
    totalCost:number;
    minQuantity:number;
    constructor(){
        this.id="";
        this.name="";
        this.totalQuantity=0;
        this.productCost=0;
        this.totalCost=0;
        this.minQuantity=0;
    }
}