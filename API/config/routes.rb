Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/users', to: 'users#register'
  post '/users/login', to: 'users#login'
  get 'users/login/check', to: 'users#check_login_status'
  delete '/users/logout', to: 'users#logout'
  get 'users', to: 'users#index'
  
  post '/todos', to: 'todos#create'
  get '/todos', to: 'todos#index'
  put 'todos/:id', to: 'todos#update'
  delete 'todos/:id', to: 'todos#destroy'

  get '/verify', to: 'application#verify_auth'
end
