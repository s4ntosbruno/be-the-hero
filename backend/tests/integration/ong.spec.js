const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () =>{
    beforeEach(async()=>{
        await connetion.migrate.latest();
    })

    AfterAll(async()=>{
       await connection.destroy()
    })
    
    it('should be able to create a new ONG', async () =>{
         const response = await request(app).post('/ongs').send({
             name: "Jurema do test",
             email: "contato@test.com",
             whatsapp: "995192392",
             city: "Novo Hamburgo",
             uf: "RS"
         })
    })
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
})