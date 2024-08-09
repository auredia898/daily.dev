const TypeOfSocialMediaService = require('./TypeOfSocialMediaService');

class TypeOfSocialMediaController {

    async createTypeOfSocialMedia(req, res) {
        try {
            const data = req.body; 
            const newTypeOfSocialMedia = await TypeOfSocialMediaService.createTypeOfSocialMedia(data);
            res.status(201).json(newTypeOfSocialMedia);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllTypesOfSocialMedia(req, res) {
        try {
            const typesOfSocialMedia = await TypeOfSocialMediaService.getAllTypesOfSocialMedia();
            res.status(200).json(typesOfSocialMedia);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getTypeOfSocialMediaById(req, res) {
        const { id } = req.params;
        try {
            const typeOfSocialMedia = await TypeOfSocialMediaService.getTypeOfSocialMediaById(id);
            res.status(200).json(typeOfSocialMedia);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateTypeOfSocialMedia(req, res) {
        const { id } = req.params;
        const data = req.body; 
        try {
            const updatedTypeOfSocialMedia = await TypeOfSocialMediaService.updateTypeOfSocialMedia(id, data);
            res.status(200).json(updatedTypeOfSocialMedia);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteTypeOfSocialMedia(req, res) {
        const { id } = req.params;
        try {
            const response = await TypeOfSocialMediaService.deleteTypeOfSocialMedia(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new TypeOfSocialMediaController();
