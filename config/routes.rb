Rails.application.routes.draw do
  resources :home, only:[:index]
  namespace :api do
    resources :books, only: [:index, :create, :destroy]
  end
  root 'home#index'
end
