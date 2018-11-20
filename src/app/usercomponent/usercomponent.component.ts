import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Iuser } from  '../Iuser';
import { Router  } from '@angular/router';
import {  
  FormBuilder,  
  FormGroup,  
  Validators  
} from '@angular/forms'; 

import {  
  Observable  
} from 'rxjs/Rx';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {

  constructor(private _userservice : UserServiceService, private route:Router)
   { }
   indLoading: boolean = false; 
   users:Iuser[]; 
   user: Iuser;  
   display='none';
   res:any;
   modalTitle: string;  
    modalBtnTitle: string;
  ngOnInit() {
    this.loadusers();
  }
 loadusers(){
    this.indLoading = true;  
    this._userservice.get('http://172.27.2.39/laravel-chat/roles').subscribe(users => {  
    this.users = users;  
    this.indLoading = false;  
});   


 
}

deleteUser(Roleid:number){
 alert(Roleid);
 if(confirm("Are you sure to delete  this role")) {
    this._userservice.delete('http://172.27.2.39/laravel-chat/deleterole/'+Roleid).subscribe( res =>{
    if(res == '1')
   {
     alert('deleted role');
    this.route.navigate(['user']);
   }
    } )
}


}
openModalDialog()
{
  this.modalTitle = "Add New User";  
  this.modalBtnTitle = "Add";  
  this.display='block'; //Set block css
  
}

  closeModalDialog()
  {
    this.display='none'; //set none css after close dialog
  }
  
 
}
