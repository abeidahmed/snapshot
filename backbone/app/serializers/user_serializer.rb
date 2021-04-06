class UserSerializer < ApplicationSerializer
  attributes :id, :full_name, :email, :token

  def token
    JsonWebToken.encode({ id: id })
  end
end
