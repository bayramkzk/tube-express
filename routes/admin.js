const mongoose = require("mongoose");
const config = require("../config");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
AdminJS.registerAdapter(AdminJSMongoose);

require("../models/video");
require("../models/category");
require("../models/star");
require("../models/tag");

const adminJS = new AdminJS({
  databases: [mongoose],
});

const router = AdminJSExpress.buildRouter(adminJS);
module.exports = router;
