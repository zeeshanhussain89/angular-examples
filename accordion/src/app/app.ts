import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accordion } from './accordion/accordion';
import { AccordionTitle } from './accordion/accordion-panel/accordion-title/accordion-title';
import { AccordionContent } from './accordion/accordion-panel/accordion-content/accordion-content';
import { AccordionPanel } from './accordion/accordion-panel/accordion-panel';

@Component({
  selector: 'app-root',
  imports: [Accordion, AccordionTitle, AccordionContent, AccordionPanel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
