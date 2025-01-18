import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';

@Component({
    selector: 'app-user-list',
    standalone:false,
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    users: Users[] = [];

    constructor(private usersService: UsersService) {}

    ngOnInit(): void {
        this.usersService.getAllUsers().subscribe((data) => {
            this.users = data;
        });
    }
}