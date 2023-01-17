Rails.application.routes.draw do
  devise_for :users
  namespace :admin do
      resources :recipes

      root to: "recipes#index"
    end
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      get 'recipes/create'
      get 'recipes/show'
      get 'recipes/destroy'
      get 'recipes/index'
      post 'recipes/create'
      get '/show/:id', to: 'recipes#show'
      delete '/destroy/:id', to: 'recipes#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
