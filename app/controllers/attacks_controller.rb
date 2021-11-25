class AttacksController < ApplicationController

    def index
        attacks = Attack.all 
        render json: attacks
    end
    
    def show 
        attack = findAttack
        render json: attack
    end

    def create
        attack = Attack.create(attack_params)
        render json: attack
    end

    private

    def findAttack
        Attack.find_by(id: params[:id])
    end

    def attack_params
        params.permit(:name, :text,  :damage, :poison, :manacost)
    end
end
