json.array! @products do |product|
    json.extract! product, :id, :name, :description, :category, :price, :rating
    json.photoUrl url_for(product.photo)
    json.reviews do
        json.array! product.reviews, :id, :rating, :product_id, :created_at, :updated_at
    end
end