

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String , size: String });

const kitty = new Cat({ name: 'Kitty2', size: "small" });
kitty.save().then( () => console.log('meow') );

