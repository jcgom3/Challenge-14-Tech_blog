const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I can't wait to finish this BootCamp and get a job",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Handlebars partials help you with avoiding to write repetitive code",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "I love every single form potatoes can be made",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "The asian joint at the mall is really good",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "There's this game call FIFA and it's pretty much a monopoly when it comes to soccer games. It sucks, but there are no other good choices so we have to stick to it",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Coding can be tricky sometimes, you just have to be patient!",
    post_id: 5,
    user_id: 4
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
