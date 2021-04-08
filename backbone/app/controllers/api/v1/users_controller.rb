class Api::V1::UsersController < ApplicationController
  skip_after_action :verify_authorized

  def create
    user = User.new(user_params)

    if user.save
      render json: user
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:full_name, :email, :password)
  end
end
