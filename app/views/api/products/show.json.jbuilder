json.reviews do
    json.array! @product.reviews, :user, :id, :title, :body, :rating, :product_id, :created_at
end