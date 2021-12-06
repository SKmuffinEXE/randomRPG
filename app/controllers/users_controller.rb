class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def index
        list = User.all
        render json: list
    end

    def show
        render json: @current_user, serializer: UserDetailsSerializer
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
