class WarningFunctions {
    getwarningmodalbox(){
        return ("#warningModal")
    }
    warningBoxClose(){
        cy.waitUntil(() => cy.get(this.getwarningmodalbox(),{force:true}).should('exist').then(()=>{
            //click on warning
             cy.get(this.getwarningmodalbox(),{force:true}).as("warningmodal")
             cy.get('@warningmodal').contains(data.closeText).should('be.visible').click({force: true})
        }))   
         
    }

}
const warningFunctions  = new WarningFunctions();
export default warningFunctions ;