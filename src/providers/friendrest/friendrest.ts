import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/Friendmodel';



@Injectable()
export class FriendrestProvider {
  
  private url:string="https://raw.githubusercontent.com/604234031cs/dataFriend/master/newdata_1.json";

  constructor(public http: HttpClient) {
    console.log('Hello FriendrestProvider Provider');
  }

  getFriendList():Observable<any>{
    return this.http.get<Friend>(this.url);
  }

}
