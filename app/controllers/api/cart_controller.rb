class Api::CartController < ApplicationController

  def create
    @cart = Cart.find_by(user_id: params[:userId], product_id: params[:productId])
    if @cart
      # puts
      # puts @cart.id
      # puts
      # puts params[:quantity]
      # puts params[:quantity].to_i + @cart.quantity
      @cart = Cart.update(@cart.id, quantity: params[:quantity].to_i + @cart.quantity)
    else
      @cart = Cart.new(user_id: params[:userId], product_id: params[:productId], quantity: params[:quantity])
      @cart.save
    end
    @user = User.find(params[:userId])
    render :show
  end

  def show
    @user = User.find(params[:id])
    @cart = Cart.find_by(user_id: @user[:id])
    render :show
  end

  def update
    
  end

  def destroy
    if params[:productId] == ""
      @cart = Cart.where(user_id: params[:id]).destroy_all
    else
      @cart = Cart.find_by(user_id: params[:id], product_id: params[:productId])
      @cart.destroy
    end
    @user = User.find(params[:id])
    render :show
  end

end