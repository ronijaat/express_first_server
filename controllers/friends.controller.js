const friend = require("../models/friends.model");

function getAllFriends(req, res){
    res.send(friend);
}

function AddnewFriend(req,res){
    if(!req.body.name){
        return res.status(400).json({
            error: 'name not found!!!'
        })
    }

    const newFriend = {
        name : req.body.name,
        id : friend.length
    }
    friend.push(newFriend);

    return res.status(200).json(newFriend);
}

function getFriend(req,res){
    const FriendId = Number(req.params.FriendId);
    const Friend = friend[FriendId]
    if(Friend){
        res.status(200).json(Friend);
    }
    else{
        res.status(404).json({
            error:"Not Found!!!!"
        })
    }
}

module.exports = {
    getAllFriends,
    getFriend,
    AddnewFriend
}