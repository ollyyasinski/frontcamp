const router = require("express").Router();
const auth = require("../../auth");

const USERS_API_PATHS = require("../../../consts/users-api-paths");
const postUser = require("./post-user");
const loginUser = require("./login-user");
const getCurrentUser = require("./get-current-user");

router.post(USERS_API_PATHS.users, auth.optional, postUser);
router.post(USERS_API_PATHS.login, auth.optional, loginUser);
router.get(USERS_API_PATHS.currentUser, auth.required, getCurrentUser);

module.exports = router;
