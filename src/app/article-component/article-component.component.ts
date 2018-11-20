import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder , NgForm ,Validators, FormControl } from '@angular/forms';
import { Articlemodel } from  '../articlemodel';
@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {

  articleform : FormGroup;
  articles :Articlemodel[];
  article : Articlemodel;

  constructor( private userser: UserServiceService ,private router: Router,private fb:FormBuilder ) {
    this.articleform = this.fb.group({
    _id:[''],
     title:['',Validators.required],
     price:['',Validators.required],
     instock:['',Validators.required],
     photo:['',Validators.required]

    });

   }


  
  

  ngOnInit() {
    this.loadproducts()
  }

 loadproducts(){
  this.userser.getproducts('http://localhost:3001/api/products').subscribe((resp)=>{
    this.articles = resp;
    console.log(this.articles);
  });


 }

 
 deleteproduct(id: number)
 {
  if(confirm("Are you sure to delete  this role")) {
    this.userser.deleteproduct('http://localhost:3001/api/products/'+id).subscribe((resp)=>{
      this.router.navigate(['/','article']);
      alert(resp.message);
    });
 
    
}
 }


 editproduct(id: number){
  this.article  = this.articles.filter(x => x._id == id)[0];  
  console.log(this.article);
  this.articleform.setValue(this.article);  
 }

  submitarticle(form :NgForm){

    if(form.value._id)
     {
       this.userser.updatearticledata('http://localhost:3001/api/products/'+form.value._id,form.value).subscribe((resp)=>{
         alert(resp.message);
       })

     } else {
      this.userser.insertarticledata('http://localhost:3001/api/quotes', form.value ).subscribe((resp)=> {
     alert(resp.response);
     });
     }
    
   }
}
