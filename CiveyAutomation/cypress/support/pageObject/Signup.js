class Signup{

    selectGender(gender)
    {
        cy.get('[class*="radio-group-button_RadioRow"]').should('be.visible').each(($el, index,$list)=>{
            const options = $el.find('label').text()
            if(options.includes(gender))
            {
                cy.wrap($el).click()
            }
            
        })

        return this
    }

    enterBirth(year)
    {   
        cy.get('[name="birth_year"]').type(year)
        return this
    }

    selectCountry(country)
    {
        cy.get('[data-test="country-select"]').click()
        cy.wait(1000)
        cy.contains(country).click({force:true})
        return this
    }

    enterZipcode(code)
    {
        cy.get('[class*="country-zip-container_zipContainer"]').type(code)
        return this
    }

    checkTerms()
    {
        return  cy.get('[name="agreed_with_terms_of_use"]').click({force:true})
    }

    clickRegister()
    {
        return cy.get('[class*="signup-user-module_submit"]').click()
    }

    getMessage()
    {
        return cy.get('[class*="main-title-module_title"]')
    }

}
export default Signup;