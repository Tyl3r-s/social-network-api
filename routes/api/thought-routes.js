const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// Thoughts
router.route('/').get(getAllThoughts);
router.route('/:thoughtId').get(getThoughtById);
router.route('/').post(addThought);
router.route('/:thoughtId').put(updateThought);
router.route('/:thoughtId').delete(removeThought);

// Reactions
router.route('/:thoughtId/reactions').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);


module.exports = router;