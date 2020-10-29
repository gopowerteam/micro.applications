import { Component, OnInit } from '@angular/core'
import { navigateToUrl } from 'single-spa'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onLogin() {
    navigateToUrl('/app01/page1')
  }
}
