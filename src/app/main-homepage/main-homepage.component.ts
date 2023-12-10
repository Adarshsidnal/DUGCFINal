import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.css']
})
export class MainHomepageComponent implements OnInit {

  constructor(private router: Router) {}
  showLoginForm: boolean = true;
  alert:boolean=false;
  onLoginClick() {
    
    // Perform any additional actions here (e.g., form validation)

    // Navigate to the main homepage component
    this.router.navigate(['/loginMain']);
    this.showLoginForm=false;
    this.alert=true;
  }

  ngOnInit(): void {
  }

}
