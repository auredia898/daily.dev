const express = require('express');
const router = express.Router();
const TypeOfSocialMediaController = require('./TypeOfSocialMediaController');

router.post('/', TypeOfSocialMediaController.createTypeOfSocialMedia);

router.get('/', TypeOfSocialMediaController.getAllTypesOfSocialMedia);

router.get('/:id', TypeOfSocialMediaController.getTypeOfSocialMediaById);

router.put('/:id', TypeOfSocialMediaController.updateTypeOfSocialMedia);

router.delete('/:id', TypeOfSocialMediaController.deleteTypeOfSocialMedia);

module.exports = router;
