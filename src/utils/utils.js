const isLike = (productLikes, userId) => productLikes.some((id) => id === userId);

export default isLike;