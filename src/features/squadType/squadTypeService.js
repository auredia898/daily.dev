const { SquadType } = require('../../utils/index')

class SquadTypeService {   

    async createSquadType(squadTypeData){
        return await SquadType.create(squadTypeData)
    }

    async updateSquadType(id, squadTypeData){
        const squadType = await SquadType.findOne({ where: { id } })
        if(!squadType){
            throw new Error ('Type of Squad not found!')        
        }
        
        squadType.set(squadTypeData);
        await squadType.save();
        return squadType;
    }


    async deleteSquadType(id){
        const squadType = await SquadType.findOne({ where: { id } })
        if(!squadType){
            throw new Error ('Type of Squad not found!')        
        }    
        await squadType.destroy();
        return { message: 'Type of Squad deleted successfully' };

    }

    async getAllSquadType(){
        return await SquadType.findAll();
    }
}

module.exports = new SquadTypeService();