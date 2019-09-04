import { Component } from '@angular/core';
import { NgxPlatformInfo } from 'projects/ngx-platform-info/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-platform-info-demo';
  constructor(private ngxPlatformInfo:NgxPlatformInfo) {
    console.log(ngxPlatformInfo.extract());
  }

}
