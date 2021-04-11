class Tag < ApplicationRecord
  validates :name, presence: true, length: { maximum: 72 }, uniqueness: { case_sensitive: false }
end
