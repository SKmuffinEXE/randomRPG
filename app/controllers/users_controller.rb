class UsersController < ApplicationController
    def index
        list = User.all
        render json: list
    end

    def show
        user = findUser
        render json: user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url)
    end

    def findUser
        User.find_by(id: params[:id])
    end
end
