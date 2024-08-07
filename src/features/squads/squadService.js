const { Squad } = require('../../utils/index')

class SquadService {   

    async createSquad(squadData){
        const {name, squadHandle, description, publicSquad, active, picture, squadTypeId} = squadData
        const squad = await Squad.create({name, squadHandle, description, publicSquad, active, picture, squadTypeId})
        return squad;
    }

    async updateSquad(id, squadData){
        const squad = await Squad.findOne({ where: { id } })
        if(!squad){
            throw new Error ('Type of Squad not found!')        
        }
        
        squad.set(squadData);
        await squad.save();
        return squad;
    }


}

module.exports = new SquadService();