Rails.application.routes.draw do

  devise_for :users
  root 'application#index'

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :posts
    end
  end
end
