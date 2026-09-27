import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { comentAction } from '../../../store/mainstore';

const BlogPost = () => {
  const dispatch = useDispatch();
  const [activePostId, setActivePostId] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [replyComment, setReplyComment] = useState('');
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);

  const blogPosts = useSelector((state) => state.coments.blogPosts);
  const userInfo = useSelector((state) => state.coments.userInfo);

  useEffect(() => {
    const savedName = localStorage.getItem('userName') || '';
    const savedEmail = localStorage.getItem('userEmail') || '';
    setUserName(savedName);
    setUserEmail(savedEmail);

    if (savedName && savedEmail) {
      dispatch(comentAction.setUserInfo({ name: savedName, email: savedEmail }));
    }
  }, [dispatch]);

  const handleReadMoreClick = (postId) => {
    setActivePostId(activePostId === postId ? null : postId);
  };

  const handleAddComment = (postId) => {
    if (newComment.trim()) {
      dispatch(
        comentAction.addComment({
          postId,
          comment: {
            id: Date.now(),
            text: newComment,
            replies: [],
            author: userInfo.name || 'Anonymous',
            email: userInfo.email || 'N/A',
          },
        })
      );
      setNewComment('');
    }
  };

  const handleAddReply = (postId, commentId) => {
    if (replyComment.trim()) {
      dispatch(
        comentAction.addReply({
          postId,
          commentId,
          reply: {
            id: Date.now(),
            text: replyComment,
            author: userInfo.name || 'Anonymous',
            email: userInfo.email || 'N/A',
          },
        })
      );
      setReplyComment('');
      setSelectedCommentId(null); // Hide the reply input after adding a reply
    }
  };

  const handleSaveUserInfo = () => {
    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', userEmail);
    dispatch(comentAction.setUserInfo({ name: userName, email: userEmail }));
    setIsFormVisible(false); // Hide the form after saving info
  };

  const toggleReplyInput = (commentId) => {
    setSelectedCommentId(selectedCommentId === commentId ? null : commentId);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto flex flex-col min-h-screen">
      {/* User Info Form */}
      {isFormVisible && (
        <div className="mb-8 p-6 border rounded-lg shadow-lg bg-gray-100">
          <h3 className="text-xl font-semibold mb-4">Your Information</h3>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email"
            className="block w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleSaveUserInfo}
            className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-black"
          >
            Save Info
          </button>
        </div>
      )}

      {/* Blog Posts */}
      <div className="space-y-6 mb-40">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-contain h-[300px] rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.text}</p>
            <p className="text-gray-500 mb-4">{post.description}</p>
            <button
              className="text-blue-600 font-semibold"
              onClick={() => handleReadMoreClick(post.id)}
            >
              {activePostId === post.id ? 'Show Less' : 'Read More'}
            </button>

            {/* Comments Section */}
            {activePostId === post.id && (
              <div className="mt-6 border-t pt-4">
                <h3 className="text-xl font-semibold mb-4">Comments</h3>
                {post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <div key={comment.id} className="mb-4">
                      <p className="text-gray-800">
                        <strong className="text-2xl">{comment.author}</strong> <span className="text-red-600 text-lg">({comment.email}):{' '}</span>
                        <p className="text-2xl">{comment.comment}</p>
                      </p>
                      {comment.replies.length > 0 && (
                        <div className="ml-4 mt-2 text-black">
                          {comment.replies.map((reply) => (
                            <p key={reply.id} className="mb-2">
                              <strong className="text-2xl">{reply.author}</strong> <span className="text-red-600 text-lg">{reply.email}</span>
                              <p className="text-2xl">{reply.comment}</p>
                            </p>
                          ))}
                        </div>
                      )}
                      <button
                        className="text-blue-500 mt-2"
                        onClick={() => toggleReplyInput(comment.id)}
                      >
                        {selectedCommentId === comment.id ? 'Cancel Reply' : 'Reply'}
                      </button>
                      {selectedCommentId === comment.id && (
                        <div className="mt-2">
                          <textarea
                            value={replyComment}
                            onChange={(e) => setReplyComment(e.target.value)}
                            placeholder="Write a reply..."
                            className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                          />
                          <button
                            className="w-full py-2 bg-black text-white rounded-lg hover:bg-red-500"
                            onClick={() => handleAddReply(post.id, comment.id)}
                          >
                            Add Reply
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No comments yet.</p>
                )}

                {/* Add Comment */}
                <div className="mt-6">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                  />
                  <button
                    className="w-full py-2 bg-black text-white rounded-lg hover:bg-red-600"
                    onClick={() => handleAddComment(post.id)}
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
