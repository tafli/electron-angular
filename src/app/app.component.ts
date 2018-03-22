import { Component } from '@angular/core';
import {ElectronService} from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private electronService: ElectronService) {}

  lauchWindows() {
    this.electronService.shell.openExternal('https://www.theboss.ch');
  }
}
