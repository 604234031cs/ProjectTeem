import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/Friendmodel';
import { FriendrestProvider } from '../../providers/friendrest/friendrest';



@Component({
  selector: 'page-frienddeteil',
  templateUrl: 'frienddeteil.html',
})
export class FrienddeteilPage {
  studentId:number;
  friend:Friend;

  constructor(public Freindrest: FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentId=this.navParams.get("studentID");
    this.Freindrest.getFriendList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentId === this.studentId)[0];
     });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrienddeteilPage');
  }
  gotoBack(){
    this.navCtrl.pop();
  }
}
