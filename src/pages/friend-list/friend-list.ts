import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FrienddeteilPage } from '../frienddeteil/frienddeteil';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { Friend } from '../../models/Friendmodel';


@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

    Friends:Friend
    classroom:String;

  constructor(private Friendrest:FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }
    ionViewWillEnter(){
    this.classroom=this.navParams.get("classroom");
   this.Friendrest.getFriendList().subscribe(data=>{
    this.Friends=data.filter (Friend => Friend.classroom === this.classroom);
   });
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }
  gotoBack(){
    this.navCtrl.pop();
  }

  showDetail(studentID:number){
    this.navCtrl.push(FrienddeteilPage,
      {studentID:studentID}
      );
  }
}
