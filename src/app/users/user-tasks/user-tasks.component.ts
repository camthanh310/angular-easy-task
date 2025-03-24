import {
  Component,
  computed,
  DestroyRef,
  Inject,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>();
  message = input.required<string>();
  // private readonly usersService = inject(UsersService);
  // private readonly activatedRoute = inject(ActivatedRoute);
  // private readonly destroyRef = inject(DestroyRef);
  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );
  userName = input.required<string>();
  // private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    // });
    //   console.log(this.message);
    //   console.log(this.activatedRoute);
    //   const subscription = this.activatedRoute.paramMap.subscribe({
    //     next: (paramMap) => {
    //       this.userName =
    //         this.usersService.users.find((u) => u.id === paramMap.get('userId'))
    //           ?.name ?? '';
    //     },
    //   });
    //   this.destroyRef.onDestroy(() => {
    //     subscription.unsubscribe();
    //   });
  }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name ?? '';

  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks";
};
