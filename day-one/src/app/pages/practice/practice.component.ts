import { User } from './../../interface/user';
import { userData } from './../../constant/user.constant';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { CommonModule, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { HighlightDirective } from '../../directive/highlight.directive';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [MatCardModule, MatListModule, CommonModule, DatePipe, MatRadioModule, MatButtonModule, HighlightDirective],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
  // userData: User[] = userData;
  
  @Input() userData!: User[];

  myColor = 'yellow';

  @Input() public username: string = 'blue';
  @Input() public balance: string = "black";
}
