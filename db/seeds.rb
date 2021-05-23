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
  [ "Ciclo I",   1 ],
  [ "Ciclo II",  1 ],
  [ "Ciclo III", 1 ],
  [ "Ciclo IV",  1 ],

  [ "Ciclo I",   2 ],
  [ "Ciclo II",  2 ],
  [ "Ciclo III", 2 ],
  [ "Ciclo IV",  2 ],

  [ "Ciclo I",   3 ],
  [ "Ciclo II",  3 ],
  [ "Ciclo III", 3 ],
  [ "Ciclo IV",  3 ]
]

KnowledgeArea_list.each do |title, metter|
  # KnowledgeArea.create( title: title, metter_id: metter )
  
  # FunctionalArea.create( title: title, metter_id: metter )

  # Profile.create( title: title, metter_id: metter )

  Shift.create( title: title, total: 10, metter_id: metter )
end




# Metter.create([{ title: 'História' , active: true }, { title: 'Biologia' , active: true }, { title: 'Bioquímica', active: true }])