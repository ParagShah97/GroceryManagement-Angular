import { Component, OnInit,ElementRef } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public addIsSelected:boolean;
  public deleteIsSelected:boolean;
  public listIsSelected:boolean;
  totalCost:number;
  quantity:number;
  productCost:number;
  public url:string="http://localhost:8080/admin/addProduct";
  constructor(private adminService:AdminService,private httpClient:HttpClient,private el: ElementRef) { }

  ngOnInit(): void {
    this.addIsSelected=false;
    this.deleteIsSelected=false;
    this.listIsSelected=false;
  }

  addProduct(){
    this.addIsSelected=true;
    this.deleteIsSelected=false;
    this.listIsSelected=false; 
  }
  deleteProduct(){
    this.addIsSelected=false;
    this.deleteIsSelected=true;
    this.listIsSelected=false; 
  }
  listProduct(){
    this.addIsSelected=false;
    this.deleteIsSelected=false;
    this.listIsSelected=true; 
  }
  addProductData(AddProductForm:NgForm){     
    let formData=AddProductForm.value;  
    if(formData['scale']==='gm' || formData['scale']==='ml')
    {
      formData['totalCost'] = (formData['productCost']*formData['totalQuantity']*1000)/formData['quantity'];
      formData['totalQuantity']=formData['totalQuantity']*1000;
      formData['minQuantity']=formData['minQuantity']*1000;
    }
    else
    {
    formData['totalCost'] = formData['productCost']*formData['totalQuantity'];
    }
    alert(AddProductForm.value['totalCost']);
    alert("data is = "+JSON.stringify(formData));
    this.adminService.addProductData(AddProductForm).subscribe(data=>{
       alert(JSON.stringify(data)); 
     });  
  
  AddProductForm.resetForm();
  return false;  
  }


  deleteProductData(DeleteProductForm:NgForm)
  {
    alert(JSON.stringify(DeleteProductForm.value));
    if(DeleteProductForm.value['delName']==="" && DeleteProductForm.value['delName']===undefined && DeleteProductForm.value['delType']==="" && DeleteProductForm.value['delType']===undefined)
    {
      alert("Please enter the fields properly");
    }
    else{
      this.adminService.deleteProductData(DeleteProductForm).subscribe(data=>{
        alert(JSON.stringify(data.result));
      });
    }

    DeleteProductForm.resetForm();
    return false;
  }

}
