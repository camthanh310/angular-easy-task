import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-app';
  users = DUMMY_USERS;
  selectedUserId = signal('u1');

  selectedUser = computed(
    () => this.users.find((user) => user.id === this.selectedUserId())!
  );

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }
}
