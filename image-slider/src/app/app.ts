import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from './carousel/carousel';
import { Slider } from './carousel/slider/slider';

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
  ];
}
