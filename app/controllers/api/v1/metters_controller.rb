class Api::V1::MettersController < ApplicationController
    # before_action :set_todo_item, only: [:show, :edit, :update, :destroy]
  def index
    metter = Metter.all.order(created_at: :desc)
    #render json: metter
    render json: metter, include: ['knowledge_areas', 'functional_areas']
  end

  def show
    if metter
      #render json: metter
      render json: metter, include: ['knowledge_areas', 'functional_areas', 'profiles']
    else
      render json: metter.errors
    end
  end

  private
  def metter
    @metter ||= Metter.find(params[:id])
  end

end
