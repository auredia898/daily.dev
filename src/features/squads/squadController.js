const SquadService = require('./squadService');



class SquadController{

    async createSquad (req, res){
        try{
            const {name, squadHandle, description, publicSquad, active, squadTypeId} = req.body
            const userId = req.user.userId; 
            const memberSquadData = { userId, memberRole: 'admin'}
            const squadData = {
                name, 
                squadHandle, 
                description, 
                publicSquad, 
                active, 
                picture: req.file? req.file.path : null, 
                squadTypeId
            }

            const { newSquad , newMemberSquad }= await SquadService.createSquad(squadData, memberSquadData);
            res.status(201).json({message: 'Squad created successfully', newSquad, newMemberSquad})
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error.message })
        }
    }

    async updateSquad(req, res){
        try{
            const { id } = req.params;
            const {name, squadHandle, description, publicSquad, active, squadTypeId, picture} = req.body
            const squadData = { name, squadHandle, description, publicSquad, active, squadTypeId, picture}
            const updateSquad = await SquadService.updateSquad(id, squadData);
            res.status(200).json(updateSquad);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteSquad(req, res){
        try{
            const { id } = req.params;
            const deleteSquad = await SquadService.deleteSquad(id)
            res.status(200).send(deleteSquad);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllSquads(req, res){
        try{
            const Squads = await SquadService.getAllSquads();
            res.status(200).json(Squads);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }
}

module.exports = new SquadController();