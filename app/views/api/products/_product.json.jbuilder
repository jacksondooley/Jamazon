json.extract! product, :id, :name, :description, :category, :price, :avg_rating, :review_count
json.photoUrl url_for(product.photo)