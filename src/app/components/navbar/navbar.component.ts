import { AuthService } from './../../auth/auth.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
show: boolean = false;
isUserLoggedIn:boolean = false;
scrolled:boolean = false;

//metodo logout che è presente nel service, quindi lo andiamo a prendere

constructor(private authSvc:AuthService){}

ngOnInit(){
  this.authSvc.isLoggedIn$.subscribe(data => {
    this.isUserLoggedIn = data;
    if (this.isUserLoggedIn) {
      this.show = false;
    }

  })
}

logout(){
this.authSvc.logout()
}


@HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 155) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

}
