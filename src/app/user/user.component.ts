import { Component, computed, input, output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  select = output<string>();

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser(): void {
    this.select.emit(this.user().id);
  }
}
