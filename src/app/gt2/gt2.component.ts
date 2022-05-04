import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AnswersService } from '../answers.service';
@Component({
  selector: 'gt2-component',
  templateUrl: './gt2.component.html',
  styleUrls: ['./gt2.component.css']
})
export class Gt2Component implements OnInit {
  category: string | undefined
  constructor(private answersService:AnswersService, private router: Router) { }

  ngOnInit(): void {
    this.category = this.answersService.category;
  //  console.log(this.category);
  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
  goToNext(bn: string | undefined){
    this.answersService.category = bn;
    this.router.navigateByUrl('gt3-component')
  }
 
}
