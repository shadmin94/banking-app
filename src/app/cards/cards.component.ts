import { Component } from '@angular/core';
import { faCirclePlus, faAsterisk, faEye, faArrowRotateLeft, faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  faEye = faEye;
  faAsterisk = faAsterisk;
  faCirclePlus = faCirclePlus;
  faCreditCard = faCreditCard;
  faArrowRotateLeft = faArrowRotateLeft;
  cardarray:any;
  cardholdername: string;

  ngOnInit():void {
    this.getCards();
    console.log(this.cardarray);
  }

  getCards():void {
    this.cardarray = localStorage.getItem('debitcards');
    this.cardarray = JSON.parse(this.cardarray);
  }

  opencardmodal(): void{
    $('#myModal').foundation('open');
  }
  addcard(): void {
    const expdate = new Date().getMonth() + '/'+ (new Date().getFullYear() + 10).toString().substring(2);
    const tempcard = {
      'cardholder': this.cardholdername,
        'cardnumber': Math.floor(Math.random()*(9999-1000+1)+1000) + ' ' + Math.floor(Math.random()*(9999-1000+1)+1000) + ' ' + Math.floor(Math.random()*(9999-1000+1)+1000) + ' ' + Math.floor(Math.random()*(9999-1000+1)+1000),
        'expdate': expdate,
        'cvv': Math.floor(Math.random()*(999-100+1)+100),
        'frozen': false
    }
    this.cardarray.push(tempcard);
    $('#myModal').foundation('close');
  }
  ngAfterViewInit():void {
    $(document).foundation();
  }
}
