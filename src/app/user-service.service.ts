import { Injectable } from '@angular/core';
import { Request ,Response , Http ,Headers ,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
import 'rxjs/add/operator/catch';  
import { Iuser } from  './Iuser';  
import { Articlemodel } from  './articlemodel';

@Injectable()
export class UserServiceService {

  constructor(private _http : Http) { }
  get(url: string): Observable < any > {
    return this._http.get(url).map((response: Response) => < any > response.json())  
            // .do(data => console.log("All: " + JSON.stringify(data)))    
      ;  
  }


  getexpressapi(url: string):Observable < any>{

    return this._http.get(url).map((test: Response) => < any > test.json());
  }
  
  getproducts(url :string ):Observable < any>{
   return this._http.get(url).map((testresp: Response) => <any> testresp.json())
  }

  post(url: string , usermodel :Iuser): Observable < any> {
  
    let body = JSON.stringify(usermodel);
    let headers = new Headers({  
      'Content-Type': 'application/json'  
  });  
  let options = new RequestOptions({  
      headers: headers  
  });  
  return this._http.post(url, body, options).map((response: Response) => < any > response.json());  

  }
  updatearticledata(url:string, articlemodel : Articlemodel ): Observable <any>{
    let body = JSON.stringify(articlemodel);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options =  new RequestOptions({
      headers:headers
    })
  
    return this._http.put(url,body,options).map((response : Response) => <any> response.json() );
    }
   
  
 delete(url: string): Observable < any>{
   return this._http.delete(url).map((response :Response)=> <any> response.json());
 }


 deleteproduct(url: string): Observable < any>{
  return this._http.delete(url).map((response: Response)=> <any> response.json() );
 }


 insertarticledata(url: string ,articlemodel : Articlemodel): Observable < any> {
   let body = JSON.stringify(articlemodel);

   let headers = new Headers({
     'Content-Type':'application/json'
   });
   let options = new RequestOptions({  
    headers: headers  
});  
return this._http.post(url, body, options).map((response: Response) => < any > response.json());  

 }
 
  
}
