import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

// import { profile } from './profile/profile';
// import { FetchApi } from './fetch-api/fetch-api';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.css'
})
export class App {
}
