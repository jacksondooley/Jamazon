class Product < ApplicationRecord

    has_one_attached :photo

    has_many :reviews

    has_many :carts

    # def self.search(query)
    #     self.where("LOWER(name) LIKE ?", "%" + query.downcase + "%")
    # end

    def avg_rating
        reviews.average(:rating)
    end

    def review_count
        reviews.count(:rating)
    end

    def qty(user_id)
        item = @carts.find_by(user_id: user_id, product_id: self.id)
        item.quantity
    end

end
