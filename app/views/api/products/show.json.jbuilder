json.extract! @product, :id, :name, :description, :category, :price, :rating
json.photoUrl url_for(@product.photo)
json.reviews do
    json.array! @product.reviews, :id, :user, :title, :body, :rating, :product_id, :created_at
end