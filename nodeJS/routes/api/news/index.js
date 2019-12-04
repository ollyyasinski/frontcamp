const router = require("express").Router();

const auth = require("../../auth");

const NEWS_API_PATH = require("../../../consts/news-api-paths");
const getNews = require("./get-news");
const getNewsByID = require("./get-news-by-ID");
const postNews = require("./post-news");
const putNews = require("./put-news");
const deleteNewsByID = require("./delete-news-by-ID");

router.put(NEWS_API_PATH.newsByID, auth.required, putNews);
router.delete(NEWS_API_PATH.newsByID, auth.required, deleteNewsByID);
router.get(NEWS_API_PATH.news, auth.optional, getNews);
router.get(NEWS_API_PATH.newsByID, auth.optional, getNewsByID);
router.post(NEWS_API_PATH.news, auth.optional, postNews);

module.exports = router;
