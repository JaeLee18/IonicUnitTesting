describe('Testing loginCtrl.js ', function(){  
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

    
    it('Login Failed', function() {
        // TODO: test unsuccessful login
        username.sendKeys('test3@test3.com');
        password.sendKeys(12345);
        loginButton.click().then(function() {
        browser.sleep(1000);
   
        expect(browser.getLocationAbsUrl()).toMatch('/login');
        });
    });
});