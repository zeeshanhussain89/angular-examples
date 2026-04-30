import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenService } from './token.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Role } from './role.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private tokenService = inject(TokenService);
  accessToken = signal<string>('');
  email = signal<string>('');
  roles = signal<Role[]>([]);

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // this.tokenService.getToken().subscribe({
    //   next: (resData) => {
    //     this.accessToken.set(resData.access_token);
    //   },
    //   complete: () => {
    //     this.tokenService.getUserProfile().subscribe({
    //       next: (resData) => {
    //         this.email.set(resData.email);
    //       },
    //     });
    //     const orgId = 'test';
    //     this.tokenService.getRoles(orgId).subscribe({
    //       next: (resData) => {
    //         this.roles.set(resData);
    //       },
    //     });
    //   },
    // });

    this.tokenService
      .getToken()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        // map((resData) => {
        //   return {
        //     accessToken: resData.access_token,
        //     orgId: resData.org_id,
        //   };
        // })
        tap((resData) => {
          console.log('resData.org_id is : ', resData.org_id);
          return { x: 1 };
        }),
        map((resData) => {
          return {
            accessToken: resData.access_token,
            orgId: resData.org_id,
          };
        }),
        switchMap((modResData) => {
          // return this.tokenService.getRoles(modResData.orgId);
          return forkJoin(
            this.tokenService.getUserProfile(),
            this.tokenService.getRoles(modResData.orgId)
          );
        })
      )
      .subscribe({
        next: ([user, roles]: [User, Role[]]) => {
          this.roles.set(roles);
          this.email.set(user.email);
          // this.accessToken.set(modResData.accessToken);
        },
      });

    // this.tokenService.getUserProfile().subscribe({
    //   next: (resData) => {
    //     this.email.set(resData.email);
    //   },
    // });
    // this.tokenService.getRoles(orgId).subscribe({
    //   next: (resData) => {
    //     this.roles.set(resData);
    //   },
    // });
  }
}
