import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gt1-component',
  templateUrl: './gt1.component.html',
  styleUrls: ['./gt1.component.css']
})
export class Gt1Component implements OnInit {

  constructor(private answersService: AnswersService, private router: Router) { }

  ngOnInit() {

    console.log(this.answersService.brandName);
  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }

  goToNext(bn: string | undefined){
    this.answersService.brandName = bn;
    this.router.navigateByUrl('/gt2-component')
  }

}
