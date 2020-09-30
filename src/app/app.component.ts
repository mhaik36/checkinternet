import { Component } from '@angular/core';
declare var $: any;
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'checkInternet';
  textContent = "......"
  //function to check the internet connection
    ngOnInit(){
      this.initService()
    }
    checkOnlineStatus = async () => {
      try {
        const online = await fetch("https://192.168.1.49:4100/assets/images/i2i-logo-only-ideas-to-Innovation.png");
        return online.status >= 200 && online.status < 300; // either true or false
      } catch (err) {
        return false; // definitely offline
      }
    };
    initService() {
      setInterval(async () => {
        const result = await this.checkOnlineStatus();
        this.textContent = result ? "online" : "offline";
      }, 3000); // probably too often, try 30000 for every 30 seconds
    }
}
