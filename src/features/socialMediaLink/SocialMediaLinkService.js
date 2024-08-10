const {SocialMediaLinks} = require('../../utils/index');


class SocialMediaLinksService {
    async  createSocialMediaLink(socialMediaLinkData) {
        const {userId, typeOfSocialMediaId, link} = socialMediaLinkData;
        const socialMediaLink = await SocialMediaLinks.create({userId, typeOfSocialMediaId, link});
        return socialMediaLink;
    }
    
    // async  getSocialMediaLinkById(id) {
    //     return await SocialMediaLinks.findByPk(id);
    // }
    
    async  getAllSocialMediaLinks() {
        return await SocialMediaLinks.findAll();
    }
    
    async  updateSocialMediaLink(id, data) {
        const socialMediaLink = await getSocialMediaLinkById(id);
        if (socialMediaLink) {
            return await socialMediaLink.update(data);
        }
        throw new Error('Social Media Link not found');
    }
    
    // async  deleteSocialMediaLink(id) {
    //     const socialMediaLink = await getSocialMediaLinkById(id);
    //     if (socialMediaLink) {
    //         return await socialMediaLink.destroy();
    //     }
    //     throw new Error('Social Media Link not found');
    // }
}

module.exports = new SocialMediaLinksService();
