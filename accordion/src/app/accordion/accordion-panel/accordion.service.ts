import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  private currentPanelOpen = new BehaviorSubject<string>('');

  updateCurrentPanelOpen(id: string) {
    this.currentPanelOpen.next(id);
  }

  currentPanelOpen$(): Observable<string> {
    return this.currentPanelOpen.asObservable();
  }
}
