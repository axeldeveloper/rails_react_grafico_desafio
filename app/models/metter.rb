class Metter < ApplicationRecord
    validates :title, presence: true



    has_many :knowledge_areas

    has_many :functional_areas

    has_many :profiles

    
end
