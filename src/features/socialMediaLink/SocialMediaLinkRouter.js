const express = require('express');
const router = express.Router();
const SocialMediaLinksController = require('./SocialMediaLinkController');
const { verifyToken} = require('../../middleware/authMiddleware');


router.post('/', verifyToken, SocialMediaLinksController.createSocialMediaLink);

router.get('/', verifyToken, SocialMediaLinksController.getAllSocialMediaLinks);

// router.get('/:id', TypeOfSocialMediaController.getTypeOfSocialMediaById);

// router.put('/:id', TypeOfSocialMediaController.updateTypeOfSocialMedia);

// router.delete('/:id', TypeOfSocialMediaController.deleteTypeOfSocialMedia);

module.exports = router;
