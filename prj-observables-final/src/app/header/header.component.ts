import { Component } from '@angular/core';
import { ServersService } from '../shared/servers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(
    private serversService: ServersService
  ) {}

  onSave() {
    this.serversService.saveRecipes();
  }

  onFetch() {
    this.serversService.fetchRecipes();
  }
}
