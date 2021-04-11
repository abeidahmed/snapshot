class Snapshot < ApplicationRecord
  belongs_to :user
  has_many :tags, as: :taggable, dependent: :destroy

  VALID_URL_REGEX = /\A(http|https):\/\/[a-z0-9]+([\-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$\z/ix

  validates :url, presence: true, format: { with: VALID_URL_REGEX }
  validates :image_url, format: { with: VALID_URL_REGEX }, allow_blank: true
  validates :title, presence: true, on: :update

  enum visibility: { universal: "universal", listed: "listed" }
end
