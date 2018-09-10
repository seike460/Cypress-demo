describe('清家史郎クビになってない？', function() {
  it('Visit Fusic', function() {
    cy.visit('https://fusic.co.jp/')

    cy.get('.staff_box')
      .click()

    cy.contains("清家 史郎")
  })
})
