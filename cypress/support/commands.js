import SelectorsLibrary from "../utils/SelectorsLibrary"

Cypress.Commands.add('validatingSalaryInsight', () => {

//Selects the option Accountant on the role field dropdown
cy.get(SelectorsLibrary.elements.roleField)
    .type('Accountant')
    .invoke('attr', 'aria-expanded', 'aria-expanded: true').should('be.visible') // the invoke function sets the 'aria-expanded' as true so the dropdown keeps open and it's possible to select the role option
cy.get(SelectorsLibrary.elements.accountantRole).click()

//Selects the option Brazil on the country field dropdown
cy.get(SelectorsLibrary.elements.countryField)
    .type('Brazil').invoke('attr', 'aria-expanded', 'aria-expanded: true')
    .should('be.visible')
cy.get(SelectorsLibrary.elements.brazilCountry).click()

cy.get(SelectorsLibrary.elements.submitButton).click()

cy.get(SelectorsLibrary.elements.chartHeader).contains('Brazil')

})