Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "projects#index"
  get '', to: 'projects#index'
  get '/index', to: 'projects#index'
  
  patch '/create', to: 'projects#create'
  post '/create', to: 'projects#create'

  patch '/update/:id', to: 'projects#update'

  resources :awe
end
