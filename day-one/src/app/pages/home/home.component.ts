import { userData } from './../../constant/user.constant';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { User } from '../../interface/user';
// import { PracticeComponent } from '../practice/practice.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 isLoggedIn: boolean = false;

//  @Input() userData! : User[];
}
