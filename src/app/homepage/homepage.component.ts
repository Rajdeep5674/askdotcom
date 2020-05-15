import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public message="";
public customerDetails=[];
viewBasicDetails()
{
  this.message="View Basic Details";
}
checkAccountBalance()
{
  this.message="account balance can be checked here";
}
fundTransfer()
{
  this.message="fundtransfer can be done here";
}
editBasicDeatils()
{
  this.message="Basic details can be edited here.";
}
pinChange()
{
  this.message="Your security pin can be changed here.";
}
more()
{
  this.message="Many more to come...";
}
update()
{
  this.message="All updates related to this website will be displayed here.";
}
help()
{
  this.message="Help section will be added soon";
}
contactUs()
{
  this.message="Contact section will be added soon";
}
  constructor() { }

  ngOnInit() {
  }

}