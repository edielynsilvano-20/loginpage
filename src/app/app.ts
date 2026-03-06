import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <--- MUST HAVE THIS

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // <--- MUST HAVE THIS
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // your existing code
}
