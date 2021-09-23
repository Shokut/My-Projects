
describe('login byipass',()=>{
    it('login',()=>{
        const cid = {"contact_id":"123"}
        cy.request('POST','https://admin.retailconnect.pk/api/v1.0/get-contact',cid)
        .then(res => cy.log(res))

        })
    })