module Tagging
  extend ActiveSupport::Concern

  included do
    has_many :tags, as: :taggable, dependent: :destroy
  end

  def tag_names=(values)
    self.tags = values.uniq.map { |name| Tag.find_or_create_by(name: name) }
  end
end
