import transactions from './transactions.json';

const reviews = [];

export const getCurrent = () => transactions[reviews.length];

export const getQuantity = async () => ({
  current: reviews.length + 1,
  quantity: transactions.length,
});

export const sendReviews = async (review) => reviews.push(review);

