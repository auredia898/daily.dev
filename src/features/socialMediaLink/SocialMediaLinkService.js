const {SocialMediaLinks} = require('../../utils/index');


class SocialMediaLinksService {
    async  createSocialMediaLink(socialMediaLinkData) {
        const {userId, typeOfSocialMediaId, link} = socialMediaLinkData;
        const socialMediaLink = await SocialMediaLinks.create({userId, typeOfSocialMediaId, link});
        return socialMediaLink;
    }
    
    async  getSocialMediaLinkById(id) {
        return await SocialMediaLinks.findByPk(id);
    }
    
    async  getAllSocialMediaLinks() {
        return await SocialMediaLinks.findAll();
    }
    
    async  updateSocialMediaLink(id, socialMediaLinkData) {
        const socialMediaLink = await SocialMediaLinks.findOne({ where: { id } })
        if (!socialMediaLink) {
            throw new Error('Social Media Link not found');
        }
        socialMediaLink.set(socialMediaLinkData);
        await socialMediaLink.save();
        return socialMediaLink;
    }
    
    async  deleteSocialMediaLink(id) {
        const socialMediaLink = await SocialMediaLinks.findOne({where: {id}});
        if (!socialMediaLink) {
            throw new Error('Social Media Link not found');
        }
        await socialMediaLink.destroy();
        return { message: 'social Media Link deleted successfully' };
    }
}

module.exports = new SocialMediaLinksService();
