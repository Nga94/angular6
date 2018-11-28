import { Injectable } from '@angular/core';
import { fakeUser } from './fake-user';
import { hocsinh } from '../../hocsinh';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): hocsinh[] {
    return fakeUser;
  }
  constructor() { }
}
