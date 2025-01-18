import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-user-update',
  standalone:false,
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  user: Users = {};
  userId: number = 0; 

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.getUserDetails();
  }

  getUserDetails(): void {
    this.usersService.getOneUser(this.userId).subscribe((data) => {
      this.user = data;
    });
  }

  updateUser(): void {
    this.usersService.updateUser(this.userId, this.user).subscribe(() => {
      this.router.navigate(['/']); 
    });
  }
}