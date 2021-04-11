module Authenticable
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_token
  end

  attr_reader :current_user

  def authenticate_token
    payload = JsonWebToken.decode(auth_token)
    @current_user = User.find(payload["id"])
  rescue JWT::DecodeError
    render json: { errors: { token: ["is invalid"] } }, status: :unprocessable_entity
  end

  private

  def auth_token
    @auth_token ||= request.headers.fetch("Authorization", "").split.last
  end
end
