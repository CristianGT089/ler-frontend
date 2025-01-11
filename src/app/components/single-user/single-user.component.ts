import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { UserService } from '../../services/user.service';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-single-user',
  imports: [FieldsetModule, FormsModule, CommonModule, DividerModule],
  templateUrl: './single-user.component.html',
  styleUrl: './single-user.component.css',
})
export class SingleUserComponent {
  user!: User;
  isLoading: boolean = false;
  errorMessage: String = '';
  userId: number | null = null;
  selectedUser: User | null = null;

  private userService = inject(UserService);

  // Método para obtener un usuario por ID
  fetchUserById(): void {
    if (this.userId === null || this.userId < 0) {
      this.errorMessage = 'Ingrese un ID válido.';
      return;
    }

    this.errorMessage = '';
    this.selectedUser = null; // Limpia los datos anteriores

    this.userService.getUserById(this.userId).subscribe({
      next: (user) => (this.selectedUser = user),
      error: (err) =>
        (this.errorMessage = 'No se encontró un usuario con ese ID.'),
    });
  }
}
