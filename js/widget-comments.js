import CommentsForm from './components/CommentsForm.js'
import CommentsList from './components/CommentsList.js'

import comments_data from './data/comments.js'

new Vue({ 
  el: "#comments_block",
  data: {
    comments: comments_data
  },
  components: {
    CommentsForm,
    CommentsList
  },
  methods: {
    addComment: function({ username, comment }) {
      comments_data.push({
        id: HELPERS.guid(),
        username,
        comment,
        date: moment().valueOf()
      })
    }
  }
})