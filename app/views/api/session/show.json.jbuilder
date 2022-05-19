json.extract! @user, :id, :name, :email, :session_token, :password_digest
json.cart @user.cart_items do |cart_item|
  cart = cart_item.carts.select { |item| item.product_id == cart_item.id}
  json.quantity cart[0].quantity
  json.extract! cart_item, :id, :name, :description, :category, :price, :rating
  json.photoUrl url_for(cart_item.photo)
end