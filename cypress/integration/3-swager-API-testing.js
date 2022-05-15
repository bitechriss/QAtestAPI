describe('API Testing', () => {
    
    it('GET - read', () => {
        cy.request('https://petstore.swagger.io/v2/pet/findByStatus?status=available').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            // expect(response.body).to.have.length(382)
            
        })
    })

    it('POST - create', () => {
        const item = {
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', item)
        .its('body')
        .its('category').should('include', {name:'string'})
        .its('photoUrls').should('not.exist')
        .its('tags').should('be.undefined')
    //    .should('deep.eq', item)
       
       
    })
})