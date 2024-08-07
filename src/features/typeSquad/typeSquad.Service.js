// const bcrypt = require('bcryptjs')
const { typeSquad } = require('../../utils/index')
// const jwt = require('jsonwebtoken');

class typeSquadService {   

    async createTypeSquad(typeSquadData){
        return await typeSquad.create(typeSquadData)
    }

    async updateTypeSquad(id, typeSquadData){
        const typeSquad = await typeSquad.findOne({ where: { id } })
        if(!typeSquad){
            throw new Error ('Type of Squad not found!')        
        }
        
        await typeSquad.update(typeSquadData)
        return typeSquad;
    }

    async deleteTypeSquad(id){
        const typeSquad = await typeSquad.findOne({ where: { id } })
        if(!typeSquad){
            throw new Error ('Type of Squad not found!')        
        }    
        await typeSquad.destroy();
        return typeSquad;
    }

    async getAllTypeSquad(){
        return await typeSquad.findAll();
    }

    async getTypeSquadById(id){
        const typeSquad = await typeSquad.findOne({ where: {id} });
        if (!typeSquad){
            throw new Error ('Type of Squad not found!') 
        }
        return typeSquad;
    }
}

module.exports = new typeSquadService();