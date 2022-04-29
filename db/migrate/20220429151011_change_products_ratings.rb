class ChangeProductsRatings < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :ratings, :rating
  end
end
