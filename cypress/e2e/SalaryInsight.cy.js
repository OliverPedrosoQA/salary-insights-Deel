describe('Salary Insight tests', function() {

    beforeEach(function() {
        cy.visit('https://growth.deel.training/dev/salary-insights')
    })

    context('Salary Insight', () => {

        it('Validating Salary Insight', () => {
            cy.validatingSalaryInsight()
        })
    })
})