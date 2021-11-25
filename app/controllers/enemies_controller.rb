class EnemiesController < ApplicationController
    def index
        list = Enemy.all
        render json: list
    end

    def show 
        enemy = findEnemy
        render json: enemy
    end

    def create
        enemy = Enemy.create(enemy_params)
        render json: enemy
    end

    private

    def findEnemy
        Enemy.find_by(id: params[:id])
    end

    def enemy_params
        params.permit(:name, :image_url, :maxhp, :maxmp, :str, :int, :dex, :speed, :con, :wis, :gold, :level, :xp)
    end
end
