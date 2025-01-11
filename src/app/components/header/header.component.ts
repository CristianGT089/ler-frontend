import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'Todos los usuarios',
      icon: 'pi pi-users'
    },
    {
      label: 'Un usuario',
      icon: 'pi pi-user'
    }]
  }
}
