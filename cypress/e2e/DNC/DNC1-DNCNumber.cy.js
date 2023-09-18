/// <reference types="cypress" />
import dncPage from '../../support/PageObjects/DNCPage';
import warningFunctions  from '../../support/PageObjects/WarningFunctions';
import dncNumber  from '../../support/PageObjects/DNCNumber';


describe('DNC add,edit, delete single number', () => {
  
    it('DNC add,edit, delete single number', () => {
        //warning box closes
        warningFunctions .warningBoxClose();

        //select call center-DNC redirect
        cy.get(dncPage.getdropdownNavBar(),{force:true}).contains(data.callcenterText,{force:true}).click();
        cy.haveTextValidation(dncPage.selectDNC(),data.dncText)
        cy.clickOnElement(dncPage.selectDNC());
        cy.urlValidation(data.urlText[1]);

        //upload dnc -redirect
        cy.haveTextValidation(dncPage.uploadDnc(),data.uploadDncText);
        cy.clickOnElement(dncPage.uploadDnc());
        cy.urlValidation(data.urlText[2]);

        //add single number
        data.listNumbers.forEach(dataElement => {
            dncNumber.addSingleNumberwithCountryCampaign(dataElement);
        });
        cy.go("back");

        //filter and search for the numbers with global dnc, validate the data
        dncNumber.filterNumber(data.campaign[1],data.campaign[2]);
        dncNumber.NumberTabledataValidation(data.listNumbers);

        //select secondnumber from bottom **minus 2 since index 
        let numberRow = (data.listNumbers.length)-2;
        dncNumber.selectNumberToEdit(numberRow);
        //edit number with autocampaign
        dncNumber.editnumber(data.newNumbers[0],data.campaign[3],data.campaign[4]);
        cy.go("back");

         //filter and search for the numbers with autocampaign, validate the numbers
         dncNumber.filterNumber(data.campaign[1],data.campaign[3]);
        dncNumber.NumberTabledataValidation(data.newNumbers);     
    });
})
  