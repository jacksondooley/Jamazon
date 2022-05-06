json.extract! @product, :id, :name, :description, :category, :price, :avg_rating, :review_count
json.photoUrl url_for(@product.photo)
json.reviews do
    json.array! @product.reviews, :user, :id, :title, :body, :rating, :product_id, :created_at
end