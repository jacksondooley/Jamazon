

export const fetchCart = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/cart/${userId}`,
  })
)

export const addItem = (userId, productId, quantity) => (
  $.ajax({
    method: 'POST',
    url: '/api/cart',
    data: { userId, productId, quantity}
  })
)