

export const fetchCart = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/cart/${userId}`,
  })
)