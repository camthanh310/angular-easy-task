import { Component, inject } from '@angular/core';
import { UsersService } from './users.service';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  private readonly usersService = inject(UsersService);
  users = this.usersService.users;
}
