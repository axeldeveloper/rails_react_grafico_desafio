Rails.application.routes.draw do
  

    namespace :api do
        namespace :v1 do
            get 'metters/index'
            post 'metters/create'
            get 'metters/show/:id', to: 'metters#show'
            delete 'metters/destroy/:id', to: 'metters#destroy'
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
