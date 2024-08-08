// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(user=env.config.user1)=>{
    loginUser(user);
})
function loginUser(user){
    cy.session(user,()=>{
        if(env.config.baseUrl.include('localhost')){
            cy.orgin(env.config.loginDomain,{args:{env,user}},fillAuth0form);
        }else{
            cy.orgin(env.config.loginDomain,{args:{env,user}},fillAuth0form);
        }
    })
}
function fillAuth0form({env,user}){
    cy.visit(env.config.baseurl);
    const auth0Form =cy.get('#container',{timeout:2000});
    const userNameField=auth0Form.get('data-cy[name="username"]');
    const passwordField=auth0Form.get('data-cy[name="password"]');
    userNameField.type(user.username);
    passwordField.type(user.password);
    if(user.isDomainUser){
        userNameField.type('@gmail.com');
        auth0Form.get('data-cy[name="submit"]').click();
    }
}