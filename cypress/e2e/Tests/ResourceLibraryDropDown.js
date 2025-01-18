describe('this suite handles drop down present on resource library page',()=>{
    it('Hnadel dropdown',()=>{
        cy.visit('https://lms2-staging.benchmarkuniverse.com/?realm=rainbow');
    //     cy.get('#username').type('rl1_teach1',{ delay: 50 })
    //    cy.get('#password').type('password',{ delay: 50 })    
    //     cy.get("[aria-label='Sign in']").click()
    //     cy.get('#logout').should('exist');
        cy.login('rl1_teach1', 'password');
        // cy.get('[href="#/library/X98972"]').click()
        // cy.get('#mainContentResource_0').should('exist')
        cy.NavigateToRL();
        // cy.get('#notstudent-library-ddl').parent().find('button').click();
        // cy.get('.list_item_name').should('exist').contains('eBooks').click(); 
        // cy.get('#mainContentResource_0').should('exist')
        cy.SelectLibraryOnRL('eBooks')
      
        // cy.get('#search_input').should('exist').clear().type('A City Song/Wonderful Sounds (Gr. 1){enter}')
        // cy.get('#mainContentResource_0').should('exist')       
        cy.SearchPackage('A Shopping Trip/Oceans of the World (Gr. 1)')
        cy.get('.more-info-button').should('exist').click()
        cy.get('#modal-title')
        .should('exist')
        .should('have.text', 'A Shopping Trip/Oceans of the World (Gr. 1)');

        // cy.get('.ui-platform-more-info-modal-sm > [data-testid="close-button"]').should('exist').click()  
    })


})