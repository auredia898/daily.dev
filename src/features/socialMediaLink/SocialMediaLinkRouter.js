const express = require('express');
const router = express.Router();
const SocialMediaLinksController = require('./SocialMediaLinkController');
const { verifyToken} = require('../../middleware/authMiddleware');


router.post('/', verifyToken, SocialMediaLinksController.createSocialMediaLink);

router.get('/', verifyToken, SocialMediaLinksController.getAllSocialMediaLinks);

router.get('/:id', verifyToken, SocialMediaLinksController.getSocialMediaLinkById);

router.put('/:id', verifyToken, SocialMediaLinksController.updateSocialMediaLink);

router.delete('/:id', verifyToken, SocialMediaLinksController.deleteSocialMediaLink);

module.exports = router;
