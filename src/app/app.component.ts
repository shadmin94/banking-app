import { Component, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
  faCreditCard,
  faCircleUp,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import 'foundation-sites';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'banking-app';
  faCreditCard = faCreditCard;
  faCircleUp = faCircleUp;
  faUser = faUser;
  homeSelected = false;
  paymentsSelected = false;

  constructor(
    private router: Router,
    private el: ElementRef,
    private location: Location
  ) {
    const cardarray = [
      {
        cardholder: 'Mark Henry',
        cardnumber: '1234 5678 9012 2020',
        expdate: '12/20',
        cvv: '123',
        frozen: false,
      },
      {
        cardholder: 'Anne Marie',
        cardnumber: '1234 5678 9012 3456',
        expdate: '12/23',
        cvv: '456',
        frozen: false,
      },
    ];

    localStorage.setItem('debitcards', JSON.stringify(cardarray));
  }

  navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
    Array.from(
      this.el.nativeElement.querySelector(`#${path}`).parentNode.children
    ).forEach((elem: any) => {
      elem.classList.remove('selected');
    });
    this.el.nativeElement.querySelector(`#${path}`).classList.add('selected');
    this.homeSelected = false;
    this.paymentsSelected = false;
    if (path === 'home') this.homeSelected = true;
    else if (path === 'payments') this.paymentsSelected = true;
  }

  ngAfterViewInit(): void {
    $(document).foundation();
    this.el.nativeElement
      .querySelector(`#${this.location.path().substring(1)}`)
      .classList.add('selected');
    if (this.location.path() === '/home') this.homeSelected = true;
    else if (this.location.path() === '/payments') this.paymentsSelected = true;
  }
}
