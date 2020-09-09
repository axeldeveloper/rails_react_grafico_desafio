# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



#8.time do |i| 
#    Metter.create(title: "Matematica #{i + 1}", active: true)
#  end


KnowledgeArea_list = [
  [ "Quantitativo", 1 ],
  [ "Básico",       1 ],
  [ "Complementar", 1 ],
  [ "Técnico",      1 ],

  [ "Quantitativo", 2 ],
  [ "Básico",       2 ],
  [ "Complementar", 2 ],
  [ "Técnico",      2 ],

  [ "Quantitativo", 3 ],
  [ "Básico",       3 ],
  [ "Complementar", 3 ],
  [ "Técnico",      3 ]
]

KnowledgeArea_list.each do |title, metter|
  # KnowledgeArea.create( title: title, metter_id: metter )
  
  # FunctionalArea.create( title: title, metter_id: metter )

  Profile.create( title: title, metter_id: metter )
end




# Metter.create([{ title: 'História' , active: true }, { title: 'Biologia' , active: true }, { title: 'Bioquímica', active: true }])