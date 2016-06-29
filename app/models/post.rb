class Post < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :favorites
  has_many :post_categories
  has_many :categories, through: :post_categories

  #paperclip validations
  has_attached_file :photo, styles: {original: "700x700>"}
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
  validates_with DimensionsValidator

  def assign_category(params)
    if params['category_ids']
      category = Category.find(params['category_ids']['id'])
      self.categories.push(category)
    elsif params['category']
      category = Category.create!(title: params['category'])
      self.categories.push(category)
    end
  end
end
