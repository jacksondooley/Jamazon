class Api::CartController < ApplicationController

  def create

  end

  def show
    @user = User.find(params[:id])
    @cart = Cart.find(@user.id)
    render :show
  end

  def update
    
  end

  def destroy

  end

end