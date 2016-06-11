class PostSerializer < ActiveModel::Serializer
  attributes :id, :photo, :description, :user_id, :categories
end
