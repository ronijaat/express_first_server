const express = require("express");

const friendController = require("../controllers/friends.controller");

const friendRouter = express.Router(); //middleware

friendRouter.use((req,res,next)=>{
    console.log('ip address',req.ip);
    next();
});

friendRouter.post('/',friendController.AddnewFriend);
friendRouter.get('/',friendController.getAllFriends);
friendRouter.get("/:FriendId",friendController.getFriend);

module.exports = friendRouter;