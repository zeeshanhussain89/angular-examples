import { Component } from '@angular/core';
import { Carousel } from './carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [Carousel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  carouselImages = [
    {
      id: 1,
      src: 'assets/image-1.jpeg',
    },
    {
      id: 2,
      src: 'assets/image-2.jpeg',
    },
    {
      id: 3,
      src: 'assets/image-3.jpeg',
    },
    {
      id: 4,
      src: 'assets/image-4.jpeg',
    },
    {
      id: 5,
      src: 'assets/image-5.jpeg',
    },
    {
      id: 6,
      src: '',
    },
  ];
}
