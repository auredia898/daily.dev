const TypeOfSocialMedia = require('./TypeOfSocialMediaModel');

class TypeOfSocialMediaService {
    // Créer un nouveau type de média social
    async createTypeOfSocialMedia(data) {
        try {
            const typeOfSocialMedia = await TypeOfSocialMedia.create(data);
            return typeOfSocialMedia;
        } catch (error) {
            throw new Error('Error creating type of social media: ' + error.message);
        }
    }

    // Récupérer tous les types de médias sociaux
    async getAllTypesOfSocialMedia() {
        try {
            const typesOfSocialMedia = await TypeOfSocialMedia.findAll();
            return typesOfSocialMedia;
        } catch (error) {
            throw new Error('Error retrieving types of social media: ' + error.message);
        }
    }

    // Récupérer un type de média social par ID
    async getTypeOfSocialMediaById(id) {
        try {
            const typeOfSocialMedia = await TypeOfSocialMedia.findByPk(id);
            if (!typeOfSocialMedia) {
                throw new Error('Type of social media not found');
            }
            return typeOfSocialMedia;
        } catch (error) {
            throw new Error('Error retrieving type of social media: ' + error.message);
        }
    }

    // Mettre à jour un type de média social
    async updateTypeOfSocialMedia(id, data) {
        try {
            const typeOfSocialMedia = await this.getTypeOfSocialMediaById(id);
            await typeOfSocialMedia.update(data);
            return typeOfSocialMedia;
        } catch (error) {
            throw new Error('Error updating type of social media: ' + error.message);
        }
    }

    // Supprimer un type de média social
    async deleteTypeOfSocialMedia(id) {
        try {
            const typeOfSocialMedia = await this.getTypeOfSocialMediaById(id);
            await typeOfSocialMedia.destroy();
            return { message: 'Type of social media deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting type of social media: ' + error.message);
        }
    }
}

module.exports = new TypeOfSocialMediaService();
