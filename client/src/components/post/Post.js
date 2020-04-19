import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/spinner'
import PostItems from '../posts/PostItems'
import { getPost } from '../../actions/post'
import CommentForm from './CommentForm'
import CommentItems from './CommentItems'

const Post = ({getPost, post: {post, loading}, match}) => {
    useEffect(() => {
        getPost(match.params.id)
    }, getPost)
    return loading || post === null ? <Spinner /> : 
    <Fragment>
        <Link to="/posts" className="btn">Back To Posts</Link>
        <PostItems post={post} showActions={false}/>
        <CommentForm postId={post._id} />
        <div className="comments">
            {post.comments.map(comment => (
                <CommentItems key={comment._id} comment={comment} postId={post._id} />
            ))}
        </div>
    </Fragment>
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPost})(Post)
