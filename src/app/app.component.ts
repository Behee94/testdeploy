import { DataService } from './service/data.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cryptos: any;
  objectKeys = Object.keys;
  constructor(private userSer: UserService, private authService: AuthService,
    private route: ActivatedRoute,
    router: Router, private data: DataService) {
    this.authService.user$.subscribe( user => {
      if (user) {
        this.userSer.save(user);
        let returnUrl;
        returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
   // this.data.getPrices().subscribe(res => {this.cryptos = res; console.log(res); });
  }
}
