import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-create-user',
  standalone:false,
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  newUser: Users = {};

  constructor(private usersService: UsersService) {}

  createUser() {
    this.usersService.createUser(this.newUser).subscribe({
      next: () => alert('User created successfully!'),
      error: (err) => console.error('Error creating user:', err)
    });
  }
}
