Rails.application.routes.draw do
  
  resources :character_items
  resources :enemy_items
  resources :enemy_attacks
  resources :character_attacks
  resources :enemies
  resources :characters
  resources :attacks
  resources :items
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
