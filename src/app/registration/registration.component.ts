import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup  ,FormBuilder, Validators ,EmailValidator ,NgForm } from '@angular/forms';
import { RestserviceService } from '../restservice.service';
import { Http } from '@angular/http';
import { Rest } from '../rest.model';

 @Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regform:FormGroup;
  
  resp :any;
  response;
 
  constructor(private frmbldr:FormBuilder, private restHttp:RestserviceService) {
    
    this.regform = frmbldr.group({
     firstname:new FormControl('',Validators.required),
     lastname:new FormControl('',Validators.required),
     email:new FormControl('',[Validators.required,Validators.email]),
     password:new FormControl('',Validators.required),
     confirmpassword : new FormControl('',Validators.required)
    },this.passwordMatchValidator)
   }


    passwordMatchValidator(regform: FormGroup) {
    return regform.get('password').value === regform.get('passwordConfirm').value
       ? null : {'mismatch': true};
 }
   
 

 onSubmit( test : NgForm){
  alert(JSON.stringify(this.regform.value));
 var response = this.restHttp.insertData(test.value).subscribe(data => {
   console.log(data);
alert('inserted data');
});

  }

  
  ngOnInit() {
  }



}
