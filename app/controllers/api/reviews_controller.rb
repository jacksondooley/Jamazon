class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.save
  end

  def update

  end

  def destroy

  end

  private

  def review_params
    params.require(:review).permit(:rating, :title, :body, :user_id, :product_id)
  end

end