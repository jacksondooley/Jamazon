json.extract! @product, :id, :name, :description, :category, :price, :rating
json.photoUrl url_for(@product.photo)