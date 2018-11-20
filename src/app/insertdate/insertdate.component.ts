import { Component, OnInit } from '@angular/core';
import {  
  FormBuilder,  NgForm,
  FormGroup,  
  Validators  
} from '@angular/forms'; 
import { Router } from  '@angular/router' 
import { UserServiceService } from '../user-service.service';
import { _keyValueDiffersFactory } from '@angular/core/src/application_module';
@Component({
  selector: 'app-insertdate',
  templateUrl: './insertdate.component.html',
  styleUrls: ['./insertdate.component.css']
})
export class InsertdateComponent implements OnInit {
  userFrm: FormGroup;  
  constructor(private fb: FormBuilder, private _userService: UserServiceService,private router: Router) { 
    
  }

  ngOnInit(): void {  
    this.userFrm = this.fb.group({  
        rolename: ['', Validators.required],  
        roleslug: ['', Validators.required],  
       
    });  

}  
  onSubmit(formData: NgForm){
    this._userService.post('http://172.27.2.39/laravel-chat/addrole', formData.value).subscribe(data =>{
      if(data == "true") {
        alert("data inserted successfully");
      }
      this.router.navigate(['user'])
    });
   
  }
}
