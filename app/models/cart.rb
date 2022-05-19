class Cart < ApplicationRecord

    belongs_to :user

    belongs_to :product

    def quantity
        self[:quantity].to_i
    end
end
