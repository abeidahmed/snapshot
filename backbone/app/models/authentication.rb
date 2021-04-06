class Authentication
  def initialize(params)
    @email = params.dig(:session, :email)
    @password = params.dig(:session, :password)
  end

  def authenticated?
    user.present?
  end

  def user
    @user ||= User.find_by(email: email)
    return unless @user

    @user.authenticate(password) ? @user : nil
  end

  private

  attr_reader :password

  def email
    @email.to_s.downcase
  end
end
