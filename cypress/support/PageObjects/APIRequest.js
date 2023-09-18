class APIRequest {
    searchAndDeleteNumbers(url){
        let result ="";
        var idList =[];
        cy.request({
            method: 'POST',
            url: url+'dnc/search',
           
        }).then((response) => { 
            expect(response.status).to.eq(200)
            let body =JSON.parse(JSON.stringify(response.body));
            result = body.data.results;
            result.forEach((el)=>{
                //console.log(el.id)
                idList.push(el.id)
            })
            //console.log(...idList);
            apiRequest.deleteIdsSingle(url,idList)
        })
    }
  
    deleteIdsSingle(url,idList){
        idList.forEach((el)=>{
            cy.log(el)
            cy.request({
                method: 'DELETE',
                url:url+'dnc/'+el+'/delete?id='+el,
            
            }).then((response) => { 
            expect(response.status).to.eq(200)
            })
        })

    }

}
const apiRequest  = new APIRequest();
export default apiRequest ;