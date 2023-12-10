import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) {}

  showLoginform: boolean = true;
  alert:boolean=false;
  onLoginClick() {
    
    // Perform any additional actions here (e.g., form validation)

    // Navigate to the main homepage component
    this.router.navigate(['/home']);
    this.showLoginform=false;
    this.alert=true;
  }

  ngOnInit(): void {
  }

}
