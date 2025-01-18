import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-user-detail',
  standalone:false,
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userId: number | null = null; 
  user: Users | null = null;   
  errorMessage: string | null = null;  

  constructor(private usersService: UsersService) {}


  searchUser(): void {
    if (this.userId !== null) {
      this.usersService.getOneUser(this.userId).subscribe({
        next: (data) => {
          this.user = data;
          this.errorMessage = null; 
        },
        error: (err) => {
          this.user = null;
          this.errorMessage = 'User not found or invalid ID';  
        }
      });
    }
  }
}