import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: any;

  constructor(public router: Router, private fb: FormBuilder, public api: ApiService) {
    this.loginForm = fb.group({
      'employee_email': [null],
      'password': [null]
    });
  }

  ngOnInit() {
  }

  tempNav(data) {
    this.api.post('login', data).subscribe(res => {
      console.log(res);
      const resp: any = res;
      localStorage.setItem('token', resp.employee_token);
      this.router.navigate(['/project-list']);

    });
  }
}
