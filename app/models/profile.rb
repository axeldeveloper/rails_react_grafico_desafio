class Profile < ApplicationRecord
  validates :title, presence: true
  belongs_to :metter
end
