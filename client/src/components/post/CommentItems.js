import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { delteComment } from '../../actions/post'

const CommentItems = ({ postId, delteComment, comment: { _id, name, user, text, avatar, date }, auth }) => {
    return (
        <div class="post bg-white p-1 my-1">
          <div>
            <a href="profile.html">
              <img
                class="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </a>
          </div>
          <div>
            <p class="my-1">
             {text}
            </p>
             <p class="post-date">
                Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
            </p>
            {!auth.loading && user === auth.user._id && (
                <button onClick={e => delteComment(postId, _id)} className="btn btn-danger">Delete</button>
            )}
          </div>
        </div>
    )
}

CommentItems.propTypes = {
    delteComment: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { delteComment })(CommentItems)
