const { Tag } = require('../../utils/index')

class TagsService {   

    async createTags(tagsData){
        return await Tag.create(tagsData)
    }

    async updateTag(id, tagsData){
        const tag = await Tag.findOne({ where: { id } })
        if(!tag){
            throw new Error ('Tag not found!')        
        }
        
        tag.set(tagsData);
        await tag.save();
        return tag;
    }

    async deleteTag(id){
        const tag = await Tag.findOne({ where: { id } })
        if(!tag){
            throw new Error ('Tag not found!')        
        }    
        await tag.destroy();
        return { message: 'Tag deleted successfully' };

    }

    async getAllTag(){
        return await Tag.findAll();
    }

    async getTagByName(name) {
        const tag = await Tag.findOne({ where: { name } });
        if (!tag) {
            throw new Error('Tag not found!');
        }
        return tag;
    }
}

module.exports = new TagsService();