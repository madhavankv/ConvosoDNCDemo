
class DNCNumber {
    getPanelBodySinleNumber(){
        return(".panel-body")
    }
    typePhoneNumber(){
        return('input[type="text"]');
    }
    selectCountry(){
        return('[ng-model="data.country_id_number"]');
    }
    selectCampaign(){
        return('[ng-model="data.campaign_id_number"]');
    }
    clickAddButton(){
        return('[ng-click="addNumber()"]')
    }
    addSingleNumberwithCountryCampaign(number){
        cy.get(this.getPanelBodySinleNumber()).as("addSingleNumber");
       
        cy.get("@addSingleNumber").find(this.selectCountry()).select(data.country[0]);
        cy.get("@addSingleNumber").find(this.typePhoneNumber()).type('{selectall}'+number);
        cy.get("@addSingleNumber").find(this.selectCampaign()).select(data.campaign[0]);
        cy.clickOnElement(this.clickAddButton());
        cy.contains('Added DNC number '+number+" to Global DNC List").should("exist");
    }
     chooseType(){
        return('[ng-model="selectOptions[key_f].name"]')
     }
     selectValue1(){
        return('.ng-scope')
     }
     selectValue2(){
        return('input[type="text"]')
     }
     selectGobal(){
        return('[data-value="GLOBAL"]')
     }
    filterNumber(campaign,globaldnc){

        cy.get(this.chooseType()).select(campaign);
        cy.get(this.selectValue1()).find(this.selectValue2()).eq(0).click({force:true},{ multiple: true }).then(()=>{
          cy.contains(""+globaldnc+"").click({force:true})
        })
        cy.contains("Search ").click({force:true});
    }
     numbercolumn(){
        return('.table.table-striped > tbody > tr > td:nth-of-type(2)')
     }
    NumberTabledataValidation(listnumber){
        cy.get(this.numbercolumn()).should("exist");
        const revlist= listnumber.reverse();
        cy.get(this.numbercolumn()).each(($e1, index, $list) =>{
            const text = $e1.text();
            expect(text).to.equal(revlist[index]);  
        })

    }
    actionField(){
        return(".text-right");
    }
    actionButton(){
       return('[data-toggle="dropdown"]');
    }
    editOption(){
        return('[href*="edit"]');
    }
    actionColumn(){
            return('.table.table-striped > tbody > tr > td:nth-of-type(4)') 
    }
    selectNumberToEdit(num){
        cy.get(this.numbercolumn()).eq(num).siblings(this.actionField()).as("selectaction");
        cy.get("@selectaction").then(()=>{
            cy.get("@selectaction").find(this.actionButton()).click({force:true});
            cy.get("@selectaction").children().find(this.editOption()).click({force:true});
        })

    }
    dncEditCntrller(){
        return("#AdminDncEditController");

    }
    editCampaign(){
        return('[ng-model="data.CurrentGeneralOptions.campaign_id"]');
    }
    applyChangeButton(){
        return('[ng-click="save()"]')
    }
    editnumber(number,campaign,val){
        cy.get(this.dncEditCntrller()).as("editcontroller");
        cy.get("@editcontroller").find(this.editCampaign()).select(campaign).should("have.value",val);
        cy.get("@editcontroller").find(this.selectValue2(),{force:true},{ timeout:7000}).type('{selectall}{backspace}'+number);
        cy.clickOnElement(this.applyChangeButton());

    }

}
const dncNumber  = new DNCNumber();
export default dncNumber ;