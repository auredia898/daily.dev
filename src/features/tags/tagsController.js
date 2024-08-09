const TagsService = require('./tagsService');


class TagsController{

    async createTags(req, res){
        try{
            const {name} = req.body
            const tagsData = {name}
            const newTags = await TagsService.createTags(tagsData)
            res.status(201).json(newTags)
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async updateTag(req, res){
        try{
            const { id } = req.params;
            const {name} = req.body
            const tagsData = { name}
            const updateTag = await TagsService.updateTag(id, tagsData);
            res.status(200).json(updateTag);
        }catch(error){
            res.status(500).json({ message: error.message })
        }
    }

    async deleteTag(req, res){
        try{
            const { id } = req.params;
            const deleteTag = await TagsService.deleteTag(id)
            res.status(200).send(deleteTag);
        }catch(error){
            res.status(404).json({ message: error.message})
        }
    }

    async getAllTag(req, res){
        try{
            const tag = await TagsService.getAllTag();
            res.status(200).json(tag);
        }catch(error){
            res.status(500).json({ message: error.message})
        }
    }

    async getTagByName(req, res) {
        try {
            const { name } = req.params;
            const tag = await TagsService.getTagByName(name);
            res.status(200).json(tag);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

}

module.exports = new TagsController();