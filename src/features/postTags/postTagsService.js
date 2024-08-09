const { PostTag , Tag} = require('../../utils/index')

class PostTagService {   

    async createPostTag(postTagsData){
        const {tagId, postId, tagName} = postTagsData
        let tag;
        if(tagId){
            tag = await Tag.findByPk(tagId)
                
        }else if(tagName){
            tag = await Tag.findOne({where: {name: tagName}});
            if(!tag){
                tag = await Tag.create({name: tagName})
            }
        }else{
            throw new Error('Either tagId or tagName must be provided');
        }

        const postTags = await PostTag.create({tagId: tag.id, postId})
        return postTags;
    }


    // async deleteMemberSquad(id){
    //     const memberSquad = await MemberSquad.findOne({ where: { id } })
    //     if(!memberSquad){
    //         throw new Error ('Squad not found!')        
    //     }    
    //     await memberSquad.destroy();
    //     return { message: 'Squad deleted successfully' };

    // }

    async getAllPostTags(){
        return await PostTag.findAll();
    }

    async getAllTagsByPostId(postId) {
        return await PostTag.findAll({
            where: { postId },
            include: [
                {
                    model: Tag,
                    attributes: ['id', 'name'],
                }
            ]
        });
    }
    
    
}

module.exports = new PostTagService();