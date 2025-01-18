import { Component, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  standalone:false,
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {
  @Input() userId!: number;
  showConfirmation: boolean = false;

  constructor(private usersService: UsersService, private router: Router) {}

  // Afficher la confirmation
  confirmDelete() {
    this.showConfirmation = true;
  }

  // Annuler la suppression
  cancelDelete() {
    this.showConfirmation = false;
  }

  // Supprimer l'utilisateur
  deleteUser() {
    if (this.userId) {
      this.usersService.deleteUser(this.userId).subscribe(() => {
        alert('User deleted successfully');
        this.router.navigate(['/']); // Redirigez l'utilisateur après la suppression
      }, error => {
        alert('Error deleting user');
      });
    }
  }
}