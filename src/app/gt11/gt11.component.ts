import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt11-component',
  templateUrl: './gt11.component.html',
  styleUrls: ['./gt11.component.css']
})
export class Gt11Component implements OnInit {


  reason: string | undefined;
  brandName: string | undefined;
  category: any;
  goods: any;
  price: any;
  clients: any;
  age: any;
  communication: any;
  proposition: any;
 c: any;
 g: any;
 h: any;
t: any;
t1:any;
 r: any;
str: any;
str2: any;
str3: any;
str4: any;
status: boolean = false;
  a: any;

  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.answersService.category);
console.log(this.answersService.goods);
console.log(this.answersService.price);
console.log(this.answersService.clients);
console.log(this.answersService.age);
console.log(this.answersService.communication);
console.log(this.answersService.proposition);
console.log(this.answersService.reason);  
console.log(this.answersService.c);
console.log(this.answersService.g);
console.log(this.answersService.h);
    this.reason = this.answersService.reason;
    this.brandName = this.answersService.brandName
    this.category = this.answersService.category
    this.goods = this.answersService.goods
    this.price = this.answersService.price
    this.clients = this.answersService.clients
    this.age = this.answersService.age
    this.communication = this.answersService.communication
    this.proposition = this.answersService.proposition

    this.c = this.answersService.c
    this.g = this.answersService.g
    this.h = this.answersService.h
    this.a = this.answersService.a
    this.r = this.answersService.r
   
    this.str = `${JSON.parse(this.g[0].percentage)}% - ${JSON.stringify(this.g[0].targetProfile)}`;
    this.str2 = `${JSON.parse(this.g[1].percentage)}% - ${JSON.stringify(this.g[1].targetProfile)}`;
    this.t = this.g[0].t;
    this.t1 = this.g[1].t;
    this.str3 = JSON.stringify(this.g[0].targetProfile);
    this.str4 = JSON.stringify(this.g[1].targetProfile);


    if((this.proposition=="Product"&&this.reason=="Exclusive ownership")||
    (this.proposition=="Product"&&this.reason=="Niche knowledge")||
    (this.proposition=="Service"&&this.reason=="Exclusive ownership")||
    (this.proposition=="Service"&&this.reason=="Niche knowledge")||
    (this.proposition=="Heritage"&&this.reason=="Exclusive ownership")||
    (this.proposition=="Heritage"&&this.reason=="Product iconicity")||
    (this.proposition=="Heritage"&&this.reason=="Niche knowledge")||
    (this.proposition=="Self-Indulgence"&&this.reason=="Exclusive ownership")){
 
      this.str = `${JSON.parse(this.g[1].percentage)}% - ${JSON.stringify(this.g[1].targetProfile)}`;
      this.str2 = `${JSON.parse(this.g[2].percentage)}% - ${JSON.stringify(this.g[2].targetProfile)}`;

      this.t = this.g[1].t;
      this.t1 = this.g[2].t;
      this.str3 = JSON.stringify(this.g[1].targetProfile);
      this.str4 = JSON.stringify(this.g[2].targetProfile);
    }




    if  (this.proposition=="Self-Indulgence"&&this.reason=="Exclusive ownership") {
      this.str = `${JSON.parse(this.g[2].percentage)}% - ${JSON.stringify(this.g[2].targetProfile)}`;
      this.t = JSON.parse(this.g[2].t);
      this.t1 = "";
      this.str2 = "";

      this.str4 = "";
    }


if ((this.proposition=="Product"&&this.reason=="Niche knowledge")||
(this.proposition=="Service"&&this.reason=="Exclusive ownership")||
(this.proposition=="Product"&&this.reason=="Return on Investment")||
(this.proposition=="Community"&&this.reason=="Niche knowledge")||
(this.proposition=="Personalization"&&this.reason=="Exclusive ownership")||
(this.proposition=="Heritage"&&this.reason=="Return on Investment")){
  this.str = `${JSON.parse(this.g[1].percentage)}% - ${JSON.stringify(this.g[1].targetProfile)}`;
      this.str2 = "";
 
      this.str4 = "";
      this.t = this.g[1].t;
      this.t1 = "";
}


if ((this.proposition=="Product"&&this.reason=="Niche knowledge")||
(this.proposition=="Service"&&this.reason=="Exclusive ownership")||
(this.proposition=="Product"&&this.reason=="Return on Investment")||
(this.proposition=="Heritage"&&this.reason=="Return on Investment")){
  this.str = `${JSON.parse(this.g[2].percentage)}% - ${JSON.stringify(this.g[2].targetProfile)}`;
      this.str2 = "";

      this.str4 = "";
      this.t = this.g[2].t;
      this.t1 = "";
}


if ((this.proposition=="Self-Indulgence"&&this.reason=="Niche knowledge")||

(this.proposition=="Status"&&this.reason=="Return on Investment")||
(this.proposition=="Community"&&this.reason=="Return on Investment")){
  this.str = `${JSON.parse(this.g[0].percentage)}% - ${JSON.stringify(this.g[0].targetProfile)}`;
      this.str2 = "";
      this.str4 = "";
      this.t = this.g[0].t;
      this.t1 = "";
}


if ((this.proposition=="Product"&&this.reason=="Return on Investment")||
(this.proposition=="Heritage"&&this.reason=="Return on Investment")||
(this.proposition=="Community"&&this.reason=="Niche knowledge")||
(this.proposition=="Personalization"&&this.reason=="Exclusive ownership")
){
  this.str = `${JSON.parse(this.g[1].percentage)}% - ${JSON.stringify(this.g[1].targetProfile)}`;
      this.str2 = "";
      this.t = this.g[1].t;
      this.t1 = "";
}








  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }


}
