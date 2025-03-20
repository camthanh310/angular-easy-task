import { Component, Input } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
}
