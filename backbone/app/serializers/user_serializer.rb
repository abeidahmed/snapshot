class UserSerializer < ApplicationSerializer
  attributes :token

  def token
    JsonWebToken.encode({
      id: object.id,
      email: object.email,
      full_name: object.full_name
    })
  end
end
