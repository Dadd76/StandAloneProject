import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllPeople } from '../services';

@Component({
  selector: 'app-people-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-page.component.html',
  styleUrl: './people-page.component.css'
})
export class PeoplePageComponent {
  people$ = getAllPeople();
}
