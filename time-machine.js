TimeMachines = new Mongo.Collection("timeMachines");

if (Meteor.isClient) {
  Template.body.helpers({
    timeMachines: function() {
      return TimeMachines.find({});
    }
  });
  
  Template.body.events({
    'submit .update-settings': function(event) {
      var ip = event.target.ip.value;
      var fps = event.target.fps.value;
      var videoLength = event.target.videoLength.value;
      TimeMachines.update(this._id, {$set: { ip, fps, videoLength } });
      return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
