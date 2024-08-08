const PostTagService = require('./postTagsService');

class PostTagController{

    async createPostTag(req, res) {
        try {
            const { tagId, tagName, postId } = req.body;

            const postTagsData = {
                tagId,
                tagName,
                postId
            };

            const newPostTag = await PostTagService.createPostTag(postTagsData);
            console.log(postTagsData);
            res.status(201).json({ message: 'Tag successfully added to the post', newPostTag });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error.message });
        }
    }

    // async updateMemberSquad(req, res){
    //     try{
    //         const { id } = req.params;
    //         const {userId, squadId, memberRole} = req.body
    //         const memberSquadData = { userId, squadId, memberRole}
    //         const updateMemberSquad = await MemberSquadService.updateMemberSquad(id, memberSquadData);
    //         res.status(200).json(updateMemberSquad);
    //     }catch(error){
    //         res.status(500).json({ message: error.message })
    //     }
    // }

    // async deleteMemberSquad(req, res){
    //     try{
    //         const { id } = req.params;
    //         const deleteMemberSquad = await MemberSquadService.deleteMemberSquad(id);
    //         res.status(200).send(deleteMemberSquad);
    //     }catch(error){
    //         res.status(404).json({ message: error.message})
    //     }
    // }

    async getAllPostTags(req, res){
        try{
            const postTag = await PostTagService.getAllPostTags();
            res.status(200).json(postTag);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    // async getAllMembersBySquadId(req, res){
    //     try{
    //         const {id} = req.params;
    //         const members = await MemberSquadService.getAllMembersBySquadId(id);
    //         res.status(200).json(members);
    //     }catch(error){
    //         res.status(500).json({ message: error.message})
    //     }
    // }
}

module.exports = new PostTagController();