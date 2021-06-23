//import LandingPage from '../../pages/engage/landing.page.js';
import LoginPage from '../../pages/engage/login.page.js';
import f from '../../core/actionLibrary/baseActionLibrary.js';

describe('WebdriverIO Appium Test', function() {
    it('Testcase1', function () {
		//browser.setWindowSize(360,882);
		// launching URL
		console.log("https://identity-dev.comprodls.com/?client=ENGAGE&redirectSignIn=https%3A%2F%2Fqa.engage.comprodls.com%2FssoRedirect%2F");
	   	browser.url("https://identity-dev.comprodls.com/?client=ENGAGE&redirectSignIn=https%3A%2F%2Fqa.engage.comprodls.com%2FssoRedirect%2F");
		
		})
		it('Testcase2', function () {
		//wait until landing page get loaded
		$('#login-user').waitForDisplayed();
		let windowTitle= browser.getTitle();
		  console.log(windowTitle);
		  //validate the title of the app
		//assert.equal(windowTitle, 'comproDLS Engage','Title is not as expected');
		//console.log(clstorFile.ComproEngage.LandingPage.IHaveAnAccountbutton.props);
	//	console.log(selectorFile.ComproEngage.LandingPage.IHaveAnAccountbutton.component);
				//browser.react$('t',{ padding: 1 }).click();
				LoginPage.Userlogin();
		//LandingPage.getStarted();
	
			//	browser.react$(selectorFile.ComproEngage.LandingPage.IHaveAnAccountbutton.component,JSON.parse(selectorFile.ComproEngage.LandingPage.IHaveAnAccountbutton.props)).click();
			//$('//div[@id="app"]//*[contains(text(),"I Already Have an Account")]').click();
			
	})
	/*	it('Testcase3', function () {
			//wait until Login page get loaded
			$("#login-user").addValue("qa_student1");
			$("#login-pass").addValue("Compro@1234");
			$('#login-mfa-btn').click();
			
	}),
	it('Testcase4', function () {
			//wait until Dashboard page get loaded
			$('//div[@id="app"]//*[contains(text(),"Practice")]').waitForDisplayed();
			$('//div[@id="app"]//*[contains(text(),"Practice")]').click();
	}),
	it('Testcase5', function () {
				//wait until TOC page get loaded
			$('//div[@id="app"]//*[contains(text(),"01")]').waitForDisplayed();
			$('//div[@id="app"]//*[contains(text(),"01")]').click();
			console.log("01 clicked");
	})
			
				*/
	
});
