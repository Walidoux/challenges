const { Router } = require('express');

const pagesController = require('../controllers/pages');

const PagesRouter = Router();

PagesRouter.get(['/', '/home'], pagesController.getHome);
PagesRouter.get('/boutique', pagesController.getBoutique);
PagesRouter.get('/faq', pagesController.getFAQ);
PagesRouter.get('/contact', pagesController.getContact);
// PagesRouter.get('/maintenance', pagesController.getMaintenance);

module.exports = PagesRouter;