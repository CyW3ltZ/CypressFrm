describe("Ebay login functionality", () => {

    it("User should be able to login to Ebay account with..", () => {
        cy.visit('https://www.ebay.com')
        cy.get("#gh-ug").click()
        
    })
    it("User should be able to enter account with credentials", () => {
        cy.visit('https://www.ebay.com')
        cy.get("#gh-ug").click()
        cy.wait(1000)
        cy.get("#userid").type("user@user@gmail.com")
       
    })


})


Run Test 
User chooses to see Giftcards

Run Test 
User chooses to see Family

Run Test 
User chooses to see Exhibition

Run Test 
Use chooses to see TMW 
