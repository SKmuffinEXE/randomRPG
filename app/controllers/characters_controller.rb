class CharactersController < ApplicationController

    def index
        list = Character.all
        render json: list
    end

    def show
        character = findCharacter
        render json: character, serializer: CharacterSerializer
    end

    def create
        character = Character.create(character_params)
        render json: character
    end

    def update  
        character = findCharacter
        character.update(character_params)
        render json: character
    end

    def destroy
        character = findCharacter
        character.destroy
        render json: character
    end

    private

    def character_params
        params.permit(:name, :health, :mhealth, :mana, :mmana, :str, :int, :dex, :speed, :con, :wis, :gold, :level, :points, :killcount, :user_id)
    end

    def findCharacter
        Character.find_by(id: params[:id])
    end
end
