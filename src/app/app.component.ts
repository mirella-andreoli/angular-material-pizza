
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('nav') nav: MatSidenav;

  close() {
    this.nav.close();
  }

  itens = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);


}
