import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  // DepositForm = new FormGroup({
  //   amount: new FormControl(''),
  //   interest: new FormControl(''),
  //   duration: new FormControl(''),
  //   period: new FormControl(''),
  
    
      
  // });
  constructor() { }

  ngOnInit(): void {
  }
  
  principal:number=undefined||0;
  rate:number=undefined||0;
  time:number=undefined||0;
  si:number=undefined||0;
  amt:number=undefined||0;
  cmpd:number=1;
  simpleInterest(){
    // this.si=(this.principal*this.rate*this.time)/(100*12);
    // this.amt=this.si+this.principal;
   this.rate/=100;
   this.si=(1+(this.rate/this.cmpd))**(this.time*this.cmpd);
   this.amt=this.principal*this.si;
  }

}
