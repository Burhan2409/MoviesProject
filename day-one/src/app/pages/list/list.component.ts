import { userData } from './../../constant/user.constant';
import { Component, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { User } from '../../interface/user';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PracticeComponent } from '../practice/practice.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatCardModule, PracticeComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
 @Input() userData!: User[];
 
 @Input() public username: string = 'pink';
 @Input() public balance: string = "black";
}
