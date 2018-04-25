
//dependencies 

var friends = require('../data/friends.js');

module.exports = function (app) {

  // Displays all friends
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });


  // POST routes....dunno how

  //create new friend

  app.post("/api/friends", function (req, res) {

    //best friend arrary
    var bestFriend = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference = 0;

    //compare friends object

    for (var i = 0; i < friends.length; i++) {
      totalDifference = 0

      //loop thru scores of each friend

      for (var j = 0; j < friends[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        if (totalDifference <= bestFriend.friendDifference) {
          bestFriend.name = friends[i].name;
          bestFriend.photo = friends[i].photo;
          bestFriend.friendDifference = totalDifference;
        }
      }
    }
    friends.push(userData);
    res.json(bestFriend);
  });

}