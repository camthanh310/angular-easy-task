import { Component, Input } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
}
