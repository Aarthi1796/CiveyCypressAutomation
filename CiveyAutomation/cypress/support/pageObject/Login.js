class Login{

    enterEmail(email)
    {
        cy.get('[type="email"').type(email)
        return this
    }

    proceed()
    {
    return  cy.contains('weiter').should('be.visible').click()
    }

}
export default Login;
