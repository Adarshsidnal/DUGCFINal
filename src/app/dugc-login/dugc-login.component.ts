import { Component, OnInit } from '@angular/core';
import { AuthMainService } from '../auth-main.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dugc-login',
  templateUrl: './dugc-login.component.html',
  styleUrls: ['./dugc-login.component.css'],
})
export class DugcLoginComponent implements OnInit {

  constructor(
    private auth: AuthMainService,
    private router: Router,
    private toast: ToastrService
  ) {}


  userdata: any;
  public userMail="";
  public userMail1="";

  showLoginForm: boolean = true; // Initially, show the login form

  toggleForm() {
    
    this.router.navigate(['/forgot-password'])
    this.showLoginForm = false;
  }

  onCLickLoginHome(){
    if(this.userMail=="dugc@123"){
      this.router.navigate(['/Minor']);
      this.showLoginForm=false;
    }
    else if(this.userMail=="co@123")
    {
      this.router.navigate(['/Minor']);
      this.showLoginForm=false;
    }
    else if(this.userMail=="admin@123")
    {
      this.router.navigate(['/Minor']);
      this.showLoginForm=false;
    }
    else if(this.userMail=="fac@123"){
      this.router.navigate(['/Minor']);
      this.showLoginForm=false;
    }

  }

  logindata = {
    // role: '',
    email: '',
    password: ''
  };
  

  ngOnInit(): void {}

  // loginUser(e: any) {
  //   console.log(this.logindata);
  //   this.auth.LoginUser(this.logindata).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.userdata = res;
  //       console.log(this.userdata.user);
  //       if (this.logindata.role == 'admin') {
  //         localStorage.setItem('token', this.userdata.user);
  //         localStorage.setItem('user_type', 'DUGCChairman');
  //       } else if (this.logindata.role == 'dugc') {
  //         localStorage.setItem('dugc', this.userdata.user);
  //         localStorage.setItem('user_type', 'DUGCCoordinator');
  //       } else if (this.logindata.role == 'coordinator') {
  //         localStorage.setItem('coordinator', this.userdata.user);
  //         localStorage.setItem('user_type', 'CourseCoordinator');
  //       }
  //       this.router.navigate(['/homeMain']);
  //       this.toast.success("You've successfully logged in!");
  //     },
  //     (err) => {
  //       console.log(err.error.msg);
  //       this.toast.error(err.error.msg);
  //     }
  //   );
  // }

  loginUser(e: any) {
    console.log(this.logindata);
    this.auth.LoginUser(this.logindata).subscribe(
      (res) => {
        console.log(res);
        this.userdata = res;
  
        // Assuming you want to store the user token regardless of the role
        localStorage.setItem('token', this.userdata.user.token);
  
        // You can set a generic user type here or based on some other logic if needed
        localStorage.setItem('user_type', 'GeneralUser');
  
        this.router.navigate(['/homeMain']);
        this.toast.success("You've successfully logged in!");
      },
      (err) => {
        console.error(err); // Log the entire error object for debugging
        console.log(err.error.msg);
        this.toast.error(err.error.msg || 'An error occurred during login.');
      }
    );
  }
  
}
