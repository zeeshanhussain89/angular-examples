import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Token } from './token.model';
import { catchError, Observable, of } from 'rxjs';
import { rolesUrl, tokenUrl, userProfilesUrl } from './endpoints';

import tokenData from '../../public/token-data.json';
import { User } from './user.model';
import userProfileData from '../../public/user-profile.json';
import { Role } from './role.model';
import rolesData from '../../public/roles.json';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private http = inject(HttpClient);

  getToken(): Observable<Token> {
    // return this.http.get<Token>('./token-data.json');
    return this.http.get<Token>(tokenUrl).pipe(catchError((error) => of(tokenData)));
  }

  getUserProfile(): Observable<User> {
    return this.http.get<User>(userProfilesUrl).pipe(catchError((error) => of(userProfileData)));
  }

  getRoles(orgId: string): Observable<Role[]> {
    const url = rolesUrl.replace('{orgId}', orgId);
    return this.http.get<Role[]>(url).pipe(catchError((error) => of(rolesData)));
  }
}
