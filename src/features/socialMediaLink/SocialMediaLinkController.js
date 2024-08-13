const SocialMediaLinksService = require('./SocialMediaLinkService');

class SocialMediaLinksController {
    async  createSocialMediaLink(req, res) {
        try {
            const { typeOfSocialMediaId, link} = req.body;
            const userId = req.user.userId;
            const socialMediaLinksData = {
                userId,
                typeOfSocialMediaId,
                link
            }
            const newSocialMediaLinks = await SocialMediaLinksService.createSocialMediaLink(socialMediaLinksData);
            res.status(201).json({message: 'Social Media Links created successfully', newSocialMediaLinks});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async  getSocialMediaLinkById(req, res) {
        try {
            const { id } = req.params;
            const link = await SocialMediaLinksService.getSocialMediaLinkById(id);
            if (link) {
                res.status(200).json(link);
            } else {
                res.status(404).json({ message: 'Social Media Link not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async  getAllSocialMediaLinks(req, res) {
        try {
            const links = await SocialMediaLinksService.getAllSocialMediaLinks();
            res.status(200).json(links);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    
    async  updateSocialMediaLink(req, res) {
        try {
            const { id } = req.params;
            const { typeOfSocialMediaId, link } = req.body;
            const socialMediaLinkData = {typeOfSocialMediaId, link}
            const updatedLink = await SocialMediaLinksService.updateSocialMediaLink(id, socialMediaLinkData);
            res.status(200).json(updatedLink);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    
    async  deleteSocialMediaLink(req, res) {
        try {
            const { id } = req.params;
            const socialMediaLink = await SocialMediaLinksService.deleteSocialMediaLink(id);
            res.status(204).json(socialMediaLink);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new SocialMediaLinksController();
