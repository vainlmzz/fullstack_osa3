const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}




const newName = process.argv[3]
const newNumber = process.argv[4]

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })



const personSchema = new mongoose.Schema({ 
  id: Number,
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3 ) {
    console.log('Phonbook:')
    Person.find({}).then(result => {
        result.forEach(person => {
        console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })

}


if (process.argv.length === 5 ) {

    
    const person = new Person(
        {
        name:  newName,
        number: newNumber
        
        }
    )
    
    person.save().then(response => {
      console.log(`added ${person.name} number ${person.number} to phonebook`)
      mongoose.connection.close()
    })
    
}

