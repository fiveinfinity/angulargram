class DimensionsValidator < ActiveModel::Validator
  def validate(record)
    temp_file = record.photo.queued_for_write[:original]
    unless temp_file.nil?
      dimensions = Paperclip::Geometry.from_file(temp_file)
      width = dimensions.width
      height = dimensions.height

      if width < 500
        record.errors['size'] << " Dimensions are too small. For a good quality photo please upload a larger image. Minimum width: 700px, minimum height: 700px"
      end
    end
  end
end
