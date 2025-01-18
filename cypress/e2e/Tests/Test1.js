describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://lms2-staging.benchmarkuniverse.com/?realm=rainbow');
        cy.get('#username').type('rl1_teach1',{ delay: 50 })
       cy.get('#password').type('password',{ delay: 50 })    
        cy.get("[aria-label='Sign in']").click()
        cy.get('#logout').should('exist');
        cy.get('[href="#/library/X98972"]').click()
        cy.get('#mainContentResource_0').should('exist')
        cy.get('#mainContentResource_0').drag('#booshelfContainer');
        cy.get('.ui-platform-bookshelfmodal-wrapper').should('exist')
        const randomNumber = Math.floor(Math.random() * 50) + 1;  
        const randomName = `newbk${randomNumber}`;
        cy.log(`Generated Name: ${randomName}`);
        cy.get('#inputId').type(randomName);  
        cy.get(':nth-child(2) > [data-testid="ui-plaform-button-testid"]').should('exist').click();
        cy.wait(5000)       
        cy.get('#booshelfContainer').should('exist').click();    
        cy.get('[id*="more-info"]').should('exist').click(); // Locates an element containing the text 'moreinfo'
        cy.get('[aria-label="Remove from Bookshelf"] > :nth-child(2)').should('exist').click();
        cy.get('[aria-label="Add to Bookshelf"] > :nth-child(2)').should('exist')
        cy.get('.ui-platform-more-info-modal-sm > [data-testid="close-button"]').should('exist').click();
        cy.wait(5000);

    })
  })