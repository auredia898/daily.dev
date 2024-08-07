const { Squad } = require('../../utils/index')

class SquadService {   

    async createSquad(squadData){
        const {name, squadHandle, description, publicSquad, active, picture, squadTypeId} = squadData
        const squad = await Squad.create({name, squadHandle, description, publicSquad, active, picture, squadTypeId})
        return squad;
    }

    // async updateSquadType(id, squadTypeData){
    //     const squadType = await SquadType.findOne({ where: { id } })
    //     if(!squadType){
    //         throw new Error ('Type of Squad not found!')        
    //     }
        
    //     squadType.set(squadTypeData);
    //     await squadType.save();
    //     return squadType;
    // }


    // async deleteSquadType(id){
    //     const squadType = await SquadType.findOne({ where: { id } })
    //     if(!squadType){
    //         throw new Error ('Type of Squad not found!')        
    //     }    
    //     await squadType.destroy();
    //     return { message: 'Type of Squad deleted successfully' };

    // }

    // async getAllSquadType(){
    //     return await SquadType.findAll();
    // }
}

module.exports = new SquadService();