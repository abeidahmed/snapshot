Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: %i[create]
      resources :sessions, only: %i[create]
      resources :snapshots, only: %i[create]
    end
  end
end
