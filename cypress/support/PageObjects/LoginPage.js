class LoginPage {
    getUserIDField(){
        return ("#username");
    }

    getPasswordField(){
        return ("#password");
    }
    
    getLoginButton(){
        return ('[value="SIGN IN"]');
    }


    loginValidateHomeScreen(url, userid, password,UrlText)  {
        cy.visit(url);
        cy.getElementNTypeText(this.getUserIDField(), userid)
        cy.log('Entering username '+userid)
        cy.get(this.getPasswordField({ timeout: 120000 })).type(password, { log: false });  
        cy.log('Entering password for the user '+userid)
        cy.clickOnElement(this.getLoginButton())  

      cy.urlValidation(UrlText);
       
    }


}
const loginPage = new LoginPage();
export default loginPage;