
export default{
    elements:{
        get email(){
            return cy.get('data-cy[name="email"]');
        },
        get password(){
            return cy.get('data-cy[name="password"]');
        },
        get loginButton(){
            return cy.get('data-cy[name="loginbutton"]');
        },
        get signUpButton(){
            return cy.get('data-cy[name="signup"]');
        },
        get forgotmypassword(){
            return cy.get('data-cy[name="forgotmypassword"]');
        }
    }
}