import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceComponent } from './place/place.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Favourite Places';
}
