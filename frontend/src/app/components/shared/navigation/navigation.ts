import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [ RouterLink],
  standalone: true,
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {}
