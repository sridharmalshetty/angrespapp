import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod  } from '@angular/http';
import { Rest } from './rest.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestserviceService {



  constructor(private http:Http) { 

  }


  insertData(regModel: Rest){
    var body =  JSON.stringify(regModel);
    var headeroptions = new Headers({'content-type':'application/json'});
    var requestoptions = new RequestOptions({ method: RequestMethod.Post ,headers: headeroptions});
    return this.http.post('http://localhost/blog-test/regdetails',body,requestoptions).map(x => x.json());
  }

  
  


}
