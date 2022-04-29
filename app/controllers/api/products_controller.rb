class Api::ProductsController < ApplicationController



    def index
        if params[:category] == nil
            @products = Product.all
        else
            @products = Product
                .select(:id, :name, :description, :price, :rating)
                .where(category: params[:category])
        end
        render json: @products
    end

    def show

    end

  end