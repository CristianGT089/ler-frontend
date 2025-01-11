import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserDisplayComponent,
    SingleUserComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: any[] = ['Inicio', 'Contactame'];
  title = 'LER - Prueba técnica';
}
