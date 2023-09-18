import 'cypress-wait-until';
let elementTimeout= 100000;
//for url validation
Cypress.Commands.add("urlValidation", (urlText) => {
    cy.url().should("include", urlText);
  });

  //This is the method to click on the element based on the element selector
  Cypress.Commands.add("clickOnElement", (elementSelector) => {
    cy.get(elementSelector, { timeout: elementTimeout },{ force: true })
      .invoke("removeAttr", "target")
      .click({ force: true }, { multiple: true });
  });
//This is the method to validate the have.text condition of the text of an element
Cypress.Commands.add('haveTextValidation', (elementSelector, expected) =>{
    cy.get(elementSelector,{ timeout: elementTimeout }).should('have.text', expected);
 })

  //type in the perticular field
  Cypress.Commands.add("getElementNTypeText",(elementSelector, textToType) => {
    cy.get(elementSelector, { timeout: elementTimeout }).type(textToType, {force: true})
  });

  //Static selection Method to select a perticular element with text, and ensure that it is having perticular value, For example see Billing-Filter-calender
Cypress.Commands.add('selectElement', (elementSelector, expectedtext,value) =>{
    cy.get(elementSelector,{force:true},{ timeout: elementTimeout }).select(expectedtext,{force:true}).should('have.value',value,{force:true})
    
})
  