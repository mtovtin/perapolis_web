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
str: any;
str2: any;
str3: any;
str4: any;

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
    this.str = JSON.parse(this.g[0].percentage);
    this.str2 = JSON.parse(this.g[1].percentage);
    this.str3 = JSON.stringify(this.g[0].targetProfile);
    this.str4 = JSON.stringify(this.g[1].targetProfile);
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    
  }
}
