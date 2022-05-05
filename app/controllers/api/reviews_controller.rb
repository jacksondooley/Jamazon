class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.save
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)

    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.delete
  end

  private

  def review_params
    params.require(:review).permit(:rating, :title, :body, :user_id, :product_id)
  end

end