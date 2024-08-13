const MemberSquadService = require('./memberSquadService');



class MemberSquadController{

    async createMemberSquad (req, res){
        try{
            const {squadId} = req.body
            const userId = req.user.userId; 

            const memberSquadData = {
                userId, 
                memberRole: 'simple', 
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
            const deleteMemberSquad = await MemberSquadService.deleteMemberSquad(id);
            res.status(200).send(deleteMemberSquad);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllMemberSquads(req, res){
        try{
            const memberSquads = await MemberSquadService.getAllMemberSquads();
            res.status(200).json(memberSquads);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getAllMembersBySquadId(req, res){
        try{
            const {id} = req.params;
            const members = await MemberSquadService.getAllMembersBySquadId(id);
            res.status(200).json(members);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async  getAllSquadsByUserId(req, res){
        try{
            const userId = req.user.userId; 
            const members = await MemberSquadService.getAllSquadsByUserId(userId);
            res.status(200).json(members);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }
}

module.exports = new MemberSquadController();