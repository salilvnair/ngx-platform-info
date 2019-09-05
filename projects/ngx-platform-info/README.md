# NgxPlatformInfo
> A platform detection angular library 

## How to use:

```javascript

export class AppComponent {
  title = 'ngx-platform-info-demo';
  constructor(private ngxPlatformInfo:NgxPlatformInfo) {
    console.log(ngxPlatformInfo.extract()); // returns object of PlatformInfo type with all data
    console.log(ngxPlatformInfo.os); // returns os name Windows, MacOS etc
    console.log(ngxPlatformInfo.version); // returns the version of the machine
    console.log(ngxPlatformInfo.browser); // returns the browser name
    console.log(ngxPlatformInfo.browserVersion);// returns the browser version with build number
    console.log(ngxPlatformInfo.browserMajorVersion); // returns the browser version without build number
    console.log(ngxPlatformInfo.screenSize);// returns the window screen size
    console.log(ngxPlatformInfo.manufacturer);// returns value for mobile as the mobile manufacturer
    console.log(ngxPlatformInfo.deviceType);// returns if its desktop or mobile
    console.log(ngxPlatformInfo.mobile); // returns boolean as true or false 
    console.log(ngxPlatformInfo.product); // returns value for mobile as the mobile type iPad, iPod etc use it with above
  }

}

```
