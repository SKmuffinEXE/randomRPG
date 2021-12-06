class ItemsController < ApplicationController

def index
    items = Item.all
    render json: items
end

def show
    item = Item.find_by(id: params[:id])
    render json: item
end

def create 
    item = Item.create(item_params)
    render json: item
end

def get_item
    item = Item.find_by(id: params[:item])
    character = Character.find_by(id: params[:character])
    item.get_item(character)
    render json: character, serializer: CharacterSerializer
end

private

def item_params

    params.permit(:name, :heal, :poisonheal, :damage)
end


end
