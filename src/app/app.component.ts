import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { HttpModule } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [SearchComponent, AboutComponent]
})

export class AppComponent {
  title = 'app works!';
}
