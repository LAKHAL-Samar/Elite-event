import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/model/books';
import { FeaturedBooksService } from 'src/app/service/featured-books.service';
import { ToastService } from 'src/app/service/toast.service';
import { SwiperOptions } from 'swiper';
import { FormControl, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ArrivalsBooksComponent implements OnInit {
  arrivalBooks1: Books[] = [];
  arrivalBooks2: Books[] = [];

  eventForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private featuredBooksService: FeaturedBooksService,
    private _httpClient: HttpClient, public toastService: ToastService) { }

  ngOnInit(): void {
    this.ArrivalsBooksList(0);
    this.ArrivalsBooksList(1);
  }

  sendEvent() {
    this._httpClient.post('http://localhost:1337/api/events',{ data: this.eventForm.value}).subscribe({
      next: () => { 
        this.toastService.show('Your event added successfuly', { classname: 'bg-success text-light ', delay: 5000 });
      }, error: () => {
        this.toastService.show("There is a error in your request", {classname: 'bg-danger text-light ', delay: 5000 })
      }
    });
  }

  ArrivalsBooksList(num: number) {
    this.featuredBooksService.getArrivalBooksList(num).subscribe(
      data => {
        if (num == 0) {
          this.arrivalBooks1 = data;
        } else if (num == 1) {
          this.arrivalBooks2 = data;
        }
      }
    );

  }


  config: SwiperOptions = {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  }

}
