import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {
  closable = input.required<boolean>();
  isClosed = signal(false);
  closed = output<boolean>();
  // dialog = viewChild.required<ElementRef<HTMLDivElement>>('dialog');
  // private destroyRef = inject(DestroyRef);

  onClose() {
    this.isClosed.set(true);
    this.closed.emit(true);
  }
}
