class Api::ProductsController < ApplicationController



    def index
        if params[:category] == nil
            @products = Product.all
        else
            @products = Product
                .select(:id, :name, :description, :price, :rating, :category)
                .where(category: params[:category])
        end
        render :index
    end

    def show
        @product = Product.find(id: params[:id])
        render :show
    end

  end