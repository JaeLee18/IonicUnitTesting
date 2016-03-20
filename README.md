# IonicUnitTesting
Using Protractors to test Ionic applications.

(1) Installation
  1. $ npm install -g protractor
  2. $ webdriver-manager update

(2) Testing
  1. List testing source files in config file like 'tests.conf.js'
  (Make sure to include "--disable-web-security" for Chrome)
  2. $ ionic serve --nobrowser
  3. protractor 'your config file name'


* Example: login.tests.js

 - Use browser.get('/#/login') to access login page.
 - Get username from ng-model by 'user.email'
 - Get password from ng-model by 'user.password'
 - Get a button for login from ng-model by 'login-click'

 - After get all the information to test,
  I will send testing values by *.sendKeys('Type of value')
 
 - Use brower.sleep(1000);  to wait the program a second to load the webpage.

 - If the Url contains '/tab/home', then the test case was succesful.


    

Protractor Documentation: https://angular.github.io/protractor/#/api
