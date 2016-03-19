describe('Clicking on the login button ', function(){  
    var username, password, loginButton;

    beforeEach(function() {
        browser.get('/#/login');
        username = element(by.model('vm.username'));
        password = element(by.model('vm.password'));
        loginButton = element(by.linkText('Log in'));
    });

    it('should validate the credentials for a successful login and display the My Dinners view', function() {
        // TODO: test successful login
            username.sendKeys('gonehybrid');
    password.sendKeys('password');

    loginButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/my-dinners');

        var dinners = element.all(by.repeater('dinner in vm.dinners'));
        expect(dinners.count()).toEqual(3);
    });
    })

    it('should display a popup for an unsuccessful login', function() {
        // TODO: test unsuccessful login
            username.sendKeys('gonehybrid');
    password.sendKeys('idontknow');

    loginButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/login');

        var popup = element(by.css('.popup-container.popup-showing.active'));
        expect(popup.isDisplayed()).toBeTruthy();
    });
    });
});