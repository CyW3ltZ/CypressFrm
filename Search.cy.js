
describe("Ebay search field test",() => {

    it("Should be able to navigate to ebay home page", () =>{
        cy.visit('https://www.ebay.com')
    })
    it("Sould be able to search for smartphone case", () => {
        // cypress code
        cy.visit('https://www.ebay.com')
        cy.get('#gh-ac').type('Iphone 12 pro case')
        cy.wait(1000)
        cy.get('#gh-btn').click()
    })


     it("Should find a fitness smart device", () => {
       cy.visit('https://www.ebay.com')
       cy.get('#gh-ac').type('fit bit smart watch')
       cy.wait(100)
       cy.get('#gh-cat-box').click()
       cy.get('#gh-cat-box')
       cy.get('#gh-btn').click()   // search btn

   })

    it.only("Validate the dropdown option selection (by it's value)", () => {
     cy.visit("https://www.ebay.com/")
    cy.get("select")
            .select("All Categories")
            .invoke("val")
            .should("eq", '0', '888')

    })

    it.only("Validate the dropdown option selection by it's index", () => {
        cy.visit("https://ebay.com/")
        cy.get('#gh-cat')
            .select(15).
            invoke("val")
        cy.get('#gh-cat').click
    })


    it.only("Validate the dropdown option selection by it's index", () => {
        cy.visit("https://ebay.com/")
        cy.get('#gh-cat')
        .select(28).
        invoke("val")
        cy.get('#gh-cat').click
    })

})
