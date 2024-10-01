import { userData } from './constant/user.constant';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ListComponent } from './pages/list/list.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ListComponent, PracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'day-one';
  userData: User[] = userData;
}
