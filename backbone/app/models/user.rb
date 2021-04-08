class User < ApplicationRecord
  has_many :snapshots, dependent: :destroy

  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :full_name, presence: true, length: { maximum: 255 }
  validates :email, presence: true, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false } # rubocop:disable Layout/LineLength
  validates :password, presence: true, length: { minimum: 6 }

  before_validation :strip_email
  before_save :lowercase_email

  private

  def strip_email
    self.email = email.to_s.strip
  end

  def lowercase_email
    self.email = email.to_s.downcase
  end
end
