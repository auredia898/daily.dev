const MemberSquadService = require('./memberSquadService');



class MemberSquadController{

    async createMemberSquad (req, res){
        try{
            const {userId, squadId, memberRole} = req.body
            
            const memberSquadData = {
                userId, 
                memberRole, 
                squadId
            }

            const newMemberSquad = await MemberSquadService.createMemberSquad(memberSquadData);
            res.status(201).json({message: 'Member Squad created successfully', newMemberSquad})
        }catch(error){
            console.log(error);
            res.status(500).json({ message: error.message })
        }
    }

    async updateMemberSquad(req, res){
        try{
            const { id } = req.params;
            const {userId, squadId, memberRole} = req.body
            const memberSquadData = { userId, squadId, memberRole}
            const updateMemberSquad = await MemberSquadService.updateMemberSquad(id, memberSquadData);
            res.status(200).json(updateMemberSquad);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteMemberSquad(req, res){
        try{
            const { id } = req.params;
            const deleteSquad = await SquadService.deleteSquad(id)
            res.status(200).send(deleteSquad);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllMemberSquads(req, res){
        try{
            const Squads = await SquadService.getAllSquads();
            res.status(200).json(Squads);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }
}

module.exports = new MemberSquadController();