import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'gt10-component',
  templateUrl: './gt10.component.html',
  styleUrls: ['./gt10.component.css']
})
export class Gt10Component implements OnInit {

  brandName: string | undefined = "ksks";
  category: any = 12;
  goods: any;
  price: any;
  clients: any;
  age: any;
  communication: any;
  proposition: any;
  reason: any;

  c: any;
  g: any = [];
  h: any;
  d: any;
  aw: any;

str: any;
str2: any;
str3: any;
str4: any;
Reason = {
  ONE: "Prestige",
  TWO: "Return on Investment",
  THREE: "For a greater cause",
  FOUR: "Exclusive ownership",
  FIVE: "Product iconicity",
  SIX: "Niche knowledge"
};

MarketSegment = {
  ONE: "Brand Luxury",
  TWO: "Price And Benefit",
  THREE: "Purpose Luxury",
  FOUR: "One Of A Kind Luxury",
  FIVE: "Product Luxury",
  SIX: "Crypted Luxury"
};

PurchaseProposition = {
  ONE: "Product",
  TWO: "Service",
  THREE: "Community",
  FOUR: "Status",
  FIVE: "Personalization",
  SIX: "Heritage",
  SEVEN: "Self-Indulgence"
};

Pod = {
  ONE: "To recognize",
  TWO: "To teach",
  THREE: "To lead",
  FOUR: "To treat",
  FIVE: "To endorse",
  SIX: "To inquire"
}

TargetProfile = {
  ONE: "The Self-Worth Searcher",
  TWO: "The Benefit Chaser",
  THREE: "The Communal Wearer",
  FOUR: "The Absolute Hedonist",
  FIVE: "The Fulfilment Seeker",
  SIX: "The Mastermind"
}

  constructor(private answersService:AnswersService, private router: Router) { }

  POD = (marketSegment: any) => {
    switch (marketSegment) {
      case 3:
        this.h = this.Pod.ONE;
        break;
      case 5:
        this.h = this.Pod.TWO;
        break;
      case 1:
        this.h = this.Pod.THREE;
        break;
      case 10:
        this.h = this.Pod.FOUR;
        break;
      case 6:
        this.h = this.Pod.FIVE;
        break;
      case 8:
        this.h = this.Pod.SIX;
        break;
        default:
          this.h = "Something went wrong. Try again";
          break;
    }
    return this.h;
  }

  marketExclusivity = (marketSegment: any) => {
    switch (marketSegment) {
      case this.MarketSegment.ONE:
        this.d = 3;
        break;
      case this.MarketSegment.TWO:
        this.d = 5;
        break;
      case this.MarketSegment.THREE:
        this.d = 1;
        break;
      case this.MarketSegment.FOUR:
        this.d = 10;
        break;
      case this.MarketSegment.FIVE:
        this.d = 6;
        break;
      case this.MarketSegment.SIX:
        this.d = 8;
        break;
        default:
          this.h = "Something went wrong. Try again";
          break;
    }
    this.POD(this.d);
  }

  reasonToPurchase = (reason: any) => {
    switch (reason) {
      case this.Reason.ONE:
        this.c = this.MarketSegment.ONE;
        break;
      case this.Reason.TWO:
        this.c = this.MarketSegment.TWO;
        break;
      case this.Reason.THREE:
        this.c = this.MarketSegment.THREE;
        break;
      case this.Reason.FOUR:
        this.c = this.MarketSegment.FOUR;
        break;
      case this.Reason.FIVE:
        this.c = this.MarketSegment.FIVE;
        break;
      case this.Reason.SIX:
        this.c = this.MarketSegment.SIX;
        break;
        default:
          this.h = "Something went wrong. Try again";
          break;
    }
    this.marketExclusivity(this.c);
    return this.c;
  }





  uniquePurchaseProposition = (proposition: any) => {
    let res = [{}];
    switch (proposition) {
      case this.PurchaseProposition.ONE:
        res = [{
          profileExclusivity: 2,
          targetProfile: this.TargetProfile.THREE
        },
        {
          profileExclusivity: 5,
          targetProfile: this.TargetProfile.FIVE
        },
        {
          profileExclusivity: 8,
          targetProfile: this.TargetProfile.SIX
        }
        ];
        break;
      case this.PurchaseProposition.TWO:
        res = [{
          profileExclusivity: 2,
          targetProfile: this.TargetProfile.THREE
        },
        {
          profileExclusivity: 4,
          targetProfile: this.TargetProfile.TWO
        },
        {
          profileExclusivity: 10,
          targetProfile: this.TargetProfile.FOUR
        }
        ];
        break;
      case this.PurchaseProposition.THREE:
        res = [{
          profileExclusivity: 5,
          targetProfile: this.TargetProfile.FIVE
        },
        {
          profileExclusivity: 8,
          targetProfile: this.TargetProfile.SIX
        }
        ];
        break;
      case this.PurchaseProposition.FOUR:
        res = [{
          profileExclusivity: 5,
          targetProfile: this.TargetProfile.FIVE
        },
        {
          profileExclusivity: 7,
          targetProfile: this.TargetProfile.ONE
        }
        ];
        break;
      case this.PurchaseProposition.FIVE:
        res = [{
          profileExclusivity: 4,
          targetProfile: this.TargetProfile.TWO
        },
        {
          profileExclusivity: 10,
          targetProfile: this.TargetProfile.FOUR
        }
        ];
        break;
      case this.PurchaseProposition.SIX:
        res = [{
          profileExclusivity: 4,
          targetProfile: this.TargetProfile.TWO
        },
        {
          profileExclusivity: 5,
          targetProfile: this.TargetProfile.FIVE
        },
        {
          profileExclusivity: 7,
          targetProfile: this.TargetProfile.ONE
        }
        ];
        break;
      case this.PurchaseProposition.SEVEN:
        res = [{
          profileExclusivity: 8,
          targetProfile: this.TargetProfile.SIX
        },
        {
          profileExclusivity: 7,
          targetProfile: this.TargetProfile.ONE
        },
        {
          profileExclusivity: 10,
          targetProfile: this.TargetProfile.FOUR
        }
        ];
        break;
        default:
          this.h = "Something went wrong. Try again";
          break;
    }
    this.weightedAverage(res);
  }

  weightedAverage = (profileExclusivity: any) => {
    let a = 0;
    let b: any = [];
    let c = 0;
    let checker = 0;
    let maks;

    if (profileExclusivity.length > 2) {
      for (let i = 1; i < profileExclusivity.length; i++) {
        maks = Math.abs(this.d - profileExclusivity[i - 1].profileExclusivity);
        if (Math.abs(this.d - profileExclusivity[i].profileExclusivity) > maks) {
          maks = Math.abs(this.d - profileExclusivity[i].profileExclusivity);
          checker = i;
        }
      }

      for (let i = 0; i < profileExclusivity.length; i++) {
        if (i != checker) {
          a += Math.abs(this.d - profileExclusivity[i].profileExclusivity);
        }
      }

      for (let i = 0; i < profileExclusivity.length; i++) {
        if (i != checker) {
          b.push(a - Math.abs(this.d - profileExclusivity[i].profileExclusivity));
          c += a - Math.abs(this.d - profileExclusivity[i].profileExclusivity);
        } else {
          b.push(-1);
        }
      }

      c = 100 / c;

      b.forEach((el: any) => el = (el * c).toFixed(2));

      let aw = b.map(function (x: any) {
        if (x != -1) {
          return (x * c).toFixed(2);
        }
        else return 2;
      });

      for (let i = 0; i < aw.length; i++) {
        if (aw[i] != undefined) {
          this.g.push({
            percentage: aw[i],
            targetProfile: profileExclusivity[i].targetProfile
          });
        }
      }
    } else {
      profileExclusivity.forEach((element: { profileExclusivity: any; }) => {
        var x = element.profileExclusivity;
        a += Math.abs(this.d - x);
      });

      profileExclusivity.forEach((element: { profileExclusivity: any; }) => {
        var x = element.profileExclusivity;
        b.push(a - Math.abs(this.d - x));
        c += a - Math.abs(this.d - x);
      });

      c = 100 / c;
      b.forEach((el: any) => el = (el * c).toFixed(2));
      let aw = b.map(function (x: any) {
        return (x * c).toFixed(2);
      });

      for (let i = 0; i < aw.length; i++) {
        this.g.push({
          percentage: aw[i],
          targetProfile: profileExclusivity[i].targetProfile
        });
      }
    }
    return this.g;
  }

  ngOnInit(): void {
    this.reason = this.answersService.reason;
    this.proposition = this.answersService.proposition
    this.reasonToPurchase(this.reason);
    this.uniquePurchaseProposition(this.proposition);
    
    this.brandName = this.answersService.brandName
    this.category = this.answersService.category
    this.goods = this.answersService.goods
    this.price = this.answersService.price
    this.clients = this.answersService.clients
    this.age = this.answersService.age
    this.communication = this.answersService.communication
  

  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    
  }

  goToNext(){
    this.answersService.c = this.c;
    this.answersService.g = this.g;
    this.answersService.h = this.h;
    this.router.navigateByUrl('/gt11-component')
  }

}
