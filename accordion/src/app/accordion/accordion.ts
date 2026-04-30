import { Component, ContentChildren, contentChildren, inject, QueryList } from '@angular/core';
import { AccordionPanel } from './accordion-panel/accordion-panel';
import { startWith } from 'rxjs/operators';
import { AccordionService } from './accordion-panel/accordion.service';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {}
