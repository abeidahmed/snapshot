class Tag < ApplicationRecord
  belongs_to :taggable, polymorphic: true

  validates :name, presence: true, length: { maximum: 72 }, uniqueness: { case_sensitive: false }
end
