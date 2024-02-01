
import React from 'react';
import PropTypes from 'prop-types';

const PostItem = ({ post }) => {
  return (
  <div id='main'>
      <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;