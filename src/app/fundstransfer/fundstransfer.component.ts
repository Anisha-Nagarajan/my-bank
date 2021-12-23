import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fundstransfer',
  templateUrl: './fundstransfer.component.html',
  styleUrls: ['./fundstransfer.component.css']
})
export class FundstransferComponent implements OnInit {

  window=window;
  FundsForm = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    tobname: new FormControl(''),
    bname: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl('')
      
  });
  constructor() { }

  ngOnInit(): void {
  }
 

}
