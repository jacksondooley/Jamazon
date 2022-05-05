class Product < ApplicationRecord

    has_one_attached :photo

    has_many :reviews

    def avg_rating
        reviews.average(:rating)
    end

    def review_count
        reviews.count(:rating)
    end
end
