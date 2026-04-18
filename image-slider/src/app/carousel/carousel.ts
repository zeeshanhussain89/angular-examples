import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit {
  @Input({ required: true }) carouselImages!: {
    id: number;
    src: string;
  }[];

  currentImage!: {
    id: number;
    src: string;
  };

  ngOnInit(): void {
    this.currentImage = this.carouselImages[0];
  }

  get carouselImageStyle(): string {
    return `url(${this.currentImage.src})`;
  }

  onSliderClick(id: number) {
    this.currentImage = this.carouselImages.filter((image) => image.id === id)[0];
  }
}
