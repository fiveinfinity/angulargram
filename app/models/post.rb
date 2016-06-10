class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_attached_file :photo
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
