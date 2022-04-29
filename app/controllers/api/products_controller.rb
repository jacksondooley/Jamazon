class Api::ProductsController < ApplicationController



    def index
        if params[:category] == ""
            @products = Product.all
        else
            @products = Product
                .select(:id, :name, :description, :price)
                .where(category: params[:category][1..-1])
        end
        render json: @products
    end

  end