describe('Clicking on the login button ', function(){  
    var username, password, loginButton;
    
    beforeEach(function() {
        browser.get('/#/login');
        username = element(by.model('user.email'));
        password = element(by.model('user.password'));
        loginButton = element(by.model('login-click'));
    });
   
    it('Login success', function() {
        // TODO: test successful login
            username.sendKeys('test3@test3.com');
            password.sendKeys(123456);
        loginButton.click().then(function() {
        browser.sleep(1000);
   
        expect(browser.getLocationAbsUrl()).toMatch('/tab/home');
        });
    });

//    it('should display a popup for an unsuccessful login', function() {
//        // TODO: test unsuccessful login
//            username.sendKeys('gonehybrid');
//            password.sendKeys('idontknow');
//        
//    loginButton.click().then(function() {
//        expect(browser.getLocationAbsUrl()).toMatch('/login');
//
//        var popup = element(by.css('.popup-container.popup-showing.active'));
//        expect(popup.isDisplayed()).toBeTruthy();
//    });
//    });
});