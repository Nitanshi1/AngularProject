import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceComponent } from './place/place.component';
import { MessageComponent } from './message/message.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlaceComponent,MessageComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Favourite Places';
}
