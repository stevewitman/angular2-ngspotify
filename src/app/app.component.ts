import { Component } from '@angular/core';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { AboutComponent } from './components/about/about.component';
// import { SearchComponent } from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';
// import { HttpModule } from '@angular/http'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})

export class AppComponent {
  title = 'app works!';
}
