import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dialog } from './dialog/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Dialog, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  modalData = signal({
    header: 'Test Header',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam vero sunt nemo nisi rem quo labore eum officia incidunt. Aliquid rem nesciunt impedit sint laboriosam, autem tempore recusandae nobis.',
    footer: 'Test Footer',
  });
  isModalClosed: boolean = true;

  enteredContent = signal<string>(this.modalData().body);

  onSave() {
    console.log(this.enteredContent());
    this.onModalClose(true);
  }

  onCancel() {
    this.onModalClose(true);
  }

  onModalClose(status: boolean) {
    this.isModalClosed = true;
    this.enteredContent.set(this.modalData().body);
  }

  onModalShow() {
    this.isModalClosed = false;
  }
}
