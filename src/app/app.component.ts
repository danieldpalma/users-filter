import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  usersList: IUser[] = [];

  onUserSelected(user: IUser) {
    this.showUserDetails = true;
    this.userSelected = user;
  }

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
    }, 1);
  }

  onFilter(filterOptions: IFilterOptions) {
    console.log(filterOptions);
  }
}
