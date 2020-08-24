Rails.application.routes.draw do
  resources :home, only:[:index]
  namespace :api do
    resources :books
  end
  root 'home#index'
end
