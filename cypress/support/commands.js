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

Cypress.Commands.add('login', (
    
) => {
  loginUsers(user,env);
});

function loginUsers(user,env) {
  const env = Cypress.env('env') || 'dev'; // Default to 'dev' if no env is set
  const envConfig = config[env];

  cy.session(user, () => {
    if (envConfig.baseUrl.includes('dev')) {
      cy.origin(envConfig.loginDomain, { args: { envConfig, user } }, fillAuth0Form);
    } else if (envConfig.baseUrl.includes('test')) {
      cy.origin(envConfig.loginDomain, { args: { envConfig, user } }, fillAuth0Form);
    }
  });
}

function fillAuth0Form({ envConfig, user }) {
  // Your code to fill the Auth0 form goes here
}
