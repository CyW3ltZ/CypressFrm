describe("Ebay logo verification", () => {

    it("Sould be able to search smartwatch and check if it has specified diameter", () => {
        // cypress code
        cy.visit('https://www.ebay.com')
        cy.get('#gh-ac').type('Samsung Galaxy watch S6')
        cy.wait(1000)
        cy.get('#gh-btn').click()
        cy.wait(1000)
        cy.get('#x-refine__group_1__0 > .x-refine__main__value > :nth-child(1) > .x-refine__multi-select > .x-refine__multi-select-link > .x-refine__select__svg > .checkbox > .checkbox__control').click()
    }) 

    it("User can click on the logo and it redirects to default page", () => {
        cy.visit("https://www.ebay.com")
        cy.get('#gh-la').click()
    })
})

