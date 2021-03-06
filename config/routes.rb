Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create]
    resources :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :reviews, only: [:create, :update, :destroy]
    resources :cart, only: [:create, :show, :update, :destroy]
    
  end
  
end
