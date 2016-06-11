class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_attached_file :photo, styles: {large: "500x500>"}
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
