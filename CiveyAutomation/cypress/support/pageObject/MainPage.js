class MainPage
{
  
    acceptCookie()
    {
        return cy.get('[data-test="notifications-0-agree"]').click()
    }

    clickRegister()
    {
        return cy.contains('Anmelden').click()
    }

}
export default MainPage;