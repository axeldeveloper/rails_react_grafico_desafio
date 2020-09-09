Rails.application.routes.draw do
  

    namespace :api do
        namespace :v1 do
            get 'recipes/index'
            #get 'recipes/create'
            #get 'recipes/show'
            #get 'recipes/destroy'
            post 'recipes/create'
            get '/show/:id', to: 'recipes#show'
            delete '/destroy/:id', to: 'recipes#destroy'

            get 'metters/index'
            get 'metters/show/:id', to: 'metters#show'
        end
    end
    root 'home#index'
    get '/*path' => 'home#index'
  
    # root "pages#home"
    # get 'homepage/index'
    # get 'pages/home'

    #get 'pages/my_todo_items'
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
