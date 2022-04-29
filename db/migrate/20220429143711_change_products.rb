class ChangeProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :ratings, :decimal
  end
end
