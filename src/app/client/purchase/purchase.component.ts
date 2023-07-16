import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  clientData:any={};
  cartData:any=[];
  cartDataSize:number;
  grandTotal:number;
  constructor(private clientService:ClientService,private router:Router) { }

  ngOnInit() {
    this.grandTotal=0;
    this.clientService.getClient().subscribe(data=>{
      this.clientData=data.result;
      alert(JSON.stringify(this.clientData));     
    });
    this.cartData=JSON.parse(localStorage.getItem('cartData'));
    this.cartDataSize=this.cartData.length;
    alert(this.cartData);
    for(let c of this.cartData)
    {
      this.grandTotal+=parseInt(c.totalCost,10);
    }

  }

  purchase()
  {
    //alert("bla bla vla");
    this.clientService.purchase().subscribe(data=>{
      alert(JSON.stringify(data.result));
      this.router.navigateByUrl("/clientHome");
    });
  }

}
