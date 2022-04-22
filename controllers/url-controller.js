const { Url } = require('../models');
var shortid = require('shortid');

const baseUrl = 'http://localhost:3000/urls/';

exports.redirectToUrl = async (req, res, next) => {
  try {
    const { shortUrlId } = req.params;
    const url = await Url.findOne({ where: { shortUrl: shortUrlId } });
    if(url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).json({ message: 'url not found'});
    }
  } catch(error) {
    res.status(500).json({ message: 'some error', error});
  }
}

exports.createShortUrl = async (req, res, next) => {
  try {
    const { longUrl } = req.body;
    const url = await Url.findOne({ where: { longUrl } });
    if(url) {
      res.status(200).json({ message: 'url already exists found', shortUrl: baseUrl + url.shortUrl });
    } else {
      const shortUrl = shortid.generate();
      const shortenedUrl =  await Url.create({ longUrl, shortUrl })
      res.status(200).json({ message: 'url created', shortUrl: baseUrl + shortenedUrl.shortUrl});
    }
  } catch(error) {
    res.status(500).json({ message: 'some error', error});
  }
}

