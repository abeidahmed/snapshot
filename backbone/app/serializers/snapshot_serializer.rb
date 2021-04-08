class SnapshotSerializer < ApplicationSerializer
  attributes :id, :title, :description, :image_url, :url, :visibility
  belongs_to :user
end
