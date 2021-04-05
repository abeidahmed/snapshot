class JsonWebToken
  SECRET_KEY = Rails.application.secrets.secret_key_base

  def self.encode(payload)
    expiry_time = 30.days.from_now.to_i
    JWT.encode payload.merge({ exp: expiry_time }), SECRET_KEY, "HS256"
  end

  def self.decode(token)
    JWT.decode token, SECRET_KEY, true, { algorithm: "HS256" }
  end
end
