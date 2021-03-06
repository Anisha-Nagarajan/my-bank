// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login1',
//   templateUrl: './login1.component.html',
//   styleUrls: ['./login1.component.css']
// })
// export class Login1Component implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login1',
   templateUrl: './login1.component.html',
   styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

   userName!: string;
   password!: string;
   formData!: FormGroup;

   constructor(private authService : AuthService, private router : Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl("admin"),
         password: new FormControl("admin"),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['/navigation']); 
      });
   }
}
