class Api::V1::MettersController < ApplicationController
    
    
    def index
        metter = Metter.all.order(created_at: :desc)
        render json: metter, include: ['knowledge_areas', 'functional_areas', 'profiles']
    end

    def show
        if metter
            render json: metter, include: ['knowledge_areas', 'functional_areas', 'profiles', 'circles', 'shifts']
        else
            render json: metter.errors
        end
    end


    def create
        metter = Metter.create!(set_params)
        if metter
            render json: metter
        else
            render json: metter.errors
        end
    end

    def destroy
        metter&.destroy
        render json: { message: 'Metter deleted!' }
    end

    
    private
    
    def metter
        @metter ||= Metter.find(params[:id])
    end

    def set_params
        params.permit(:title, :active)
    end

end
