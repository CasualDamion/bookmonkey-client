import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationComponent} from './navigation/components/navigation.component';
import {UserStateService} from './shared/services/user-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  service = inject(UserStateService);
}
