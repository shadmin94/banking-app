import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {
  faCirclePlus,
  faAsterisk,
  faEye,
  faArrowRotateLeft,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';

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
  cardarray: any;
  cardholdername: string;
  swiper: any;

  @ViewChild('addcardform') addcardForm: NgForm;

  constructor(private el: ElementRef, public toastr: ToastrService) {}

  ngOnInit(): void {
    this.getCards();
    console.log(this.cardarray);
    $('#addCardModal').on('closed.zf.reveal', () => {
      this.addcardForm.reset();
    });
    $('#cards-all').on('change.zf.tabs', () => {
      $('#panel1').hasClass('is-active')
        ? $('.bottom-sheet').show()
        : $('.bottom-sheet').hide();
    });
  }

  getCards(): void {
    this.cardarray = localStorage.getItem('debitcards');
    this.cardarray = JSON.parse(this.cardarray);
  }

  opencardmodal(): void {
    $('#addCardModal').foundation('open');
  }

  addcard(): void {
    const expdate =
      new Date().getMonth() +
      '/' +
      (new Date().getFullYear() + 10).toString().substring(2);
    const tempcard = {
      cardholder: this.cardholdername,
      cardnumber:
        Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
        ' ' +
        Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
        ' ' +
        Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
        ' ' +
        Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
      expdate: expdate,
      cvv: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      frozen: false,
    };
    this.cardarray = [tempcard, ...this.cardarray];
    localStorage.setItem('debitcards', JSON.stringify(this.cardarray));
    setTimeout(() => {
      this.swiper.update();
      this.swiper.slideTo(0);
    }, 500);
    $('#addCardModal').foundation('close');
    this.toastr.success('Card added successfully', 'Success', {
      positionClass: 'toast-bottom-right',
    });
  }

  deletecard(): void {
    //this.swiper.removeSlide(this.swiper.activeIndex);
    this.cardarray.splice(this.swiper.activeIndex, 1);
    localStorage.setItem('debitcards', JSON.stringify(this.cardarray));
    setTimeout(() => {
      this.swiper.update();
      this.swiper.slideTo(0);
    }, 500);
    $('#confirmModal').foundation('close');
    this.toastr.success('Card deleted successfully', 'Success', {
      positionClass: 'toast-bottom-right',
    });
  }

  openconfirmmodal(): void {
    $('#confirmModal').foundation('open');
  }

  freezeCard(): void {
    this.cardarray[this.swiper.activeIndex].frozen =
      !this.cardarray[this.swiper.activeIndex].frozen;
    this.cardarray[this.swiper.activeIndex].frozen
      ? $('.bottom-sheet #freeze .action-title').html('Unfreeze card')
      : $('.bottom-sheet #freeze .action-title').html('Freeze card');
  }

  slideChange(event: Event) {
    this.cardarray[this.swiper.activeIndex].frozen
      ? $('.bottom-sheet #freeze .action-title').html('Unfreeze card')
      : $('.bottom-sheet #freeze .action-title').html('Freeze card');
  }
  ngAfterViewInit(): void {
    $(document).foundation();
    this.swiper = this.el.nativeElement.querySelector('.swiper').swiper;
    this.cardarray[this.swiper.activeIndex].frozen
      ? $('.bottom-sheet #freeze .action-title').html('Unfreeze card')
      : $('.bottom-sheet #freeze .action-title').html('Freeze card');
  }
}
