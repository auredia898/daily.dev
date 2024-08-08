const { MemberSquad } = require('../../utils/index')

class MemberSquadService {   

    async createMemberSquad(memberSquadData){
        const {userId, squadId, memberRole} = memberSquadData
        const memberSquad = await MemberSquad.create({userId, squadId, memberRole})
        return memberSquad;
    }

    async updateMemberSquad(id, memberSquadData){
        const memberSquad = await MemberSquad.findOne({ where: { id } })
        if(!memberSquad){
            throw new Error ('Type of Squad not found!')        
        }
        
        memberSquad.set(memberSquadData);
        await memberSquad.save();
        return memberSquad;
    }

    async deleteMemberSquad(id){
        const memberSquad = await MemberSquad.findOne({ where: { id } })
        if(!memberSquad){
            throw new Error ('Squad not found!')        
        }    
        await memberSquad.destroy();
        return { message: 'Squad deleted successfully' };

    }

    async getMemberSquads(){
        return await MemberSquad.findAll();
    }

}

module.exports = new MemberSquadService();