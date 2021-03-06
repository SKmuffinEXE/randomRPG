Rails.application.routes.draw do
  
  resources :encounters
  resources :character_items
  resources :enemy_items
  resources :enemy_attacks
  resources :character_attacks
  resources :enemies
  resources :characters
  resources :attacks
  resources :items
  resources :users

  #item systems
  patch '/give_item', to: 'items#get_item'
  patch '/use_item', to: 'characters#use_item'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
