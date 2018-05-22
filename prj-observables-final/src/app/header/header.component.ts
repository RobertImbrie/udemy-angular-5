import { Component } from '@angular/core';
import { ServersService } from '../shared/servers.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private serversService: ServersService,
    private authService: AuthService
  ) {}

  onSave() {
    this.serversService.saveRecipes();
  }

  onFetch() {
    this.serversService.fetchRecipes();
  }
}
