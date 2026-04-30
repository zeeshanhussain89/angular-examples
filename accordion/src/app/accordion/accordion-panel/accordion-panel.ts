import { Component, inject, OnInit, output, signal } from '@angular/core';
import { getUniqueId } from '../id-generator';
import { BehaviorSubject } from 'rxjs';
import { AccordionService } from './accordion.service';

@Component({
  selector: 'app-accordion-panel',
  imports: [],
  templateUrl: './accordion-panel.html',
  styleUrl: './accordion-panel.css',
})
export class AccordionPanel implements OnInit {
  isExpanded = false;
  id = getUniqueId();
  toggled = new BehaviorSubject<string>('');
  accordionService = inject(AccordionService);

  ngOnInit() {
    this.accordionService.currentPanelOpen$().subscribe({
      next: (id) => {
        this.isExpanded = this.id === id;
      },
    });
  }

  onContentToggle() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.accordionService.updateCurrentPanelOpen(this.id);
    }
  }
}
