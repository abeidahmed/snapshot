module HeadersHelper
  def default_header
    {
      "Authorization" => nil,
      "Content-Type" => "application/json"
    }
  end

  def auth_header(user)
    {
      "Authorization" => "Bearer #{JsonWebToken.encode(id: user.id)}",
      "Content-Type" => "application/json"
    }
  end
end
