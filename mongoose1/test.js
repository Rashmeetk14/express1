const mongoose = require('mongoose');
const Product = require('./product');
mongoose.connect('mongodb+srv://rashmeet14201:D41nWHzVL2cs0tbd@cluster0.wzgwrle.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    const newProduct = new Product({
      name: 'Rashmeet kaur gabbi',
      email: 'rashmeet14201@gmail.com',
      mobileNumber: 789456123,
      age: 23,
      address: 'Phagwara, Punjab',
      isActive: false
    });
    newProduct.save()
    .then((savedProduct) => {
        console.log('Product saved:', savedProduct);
        mongoose.connection.close()
        .then(() => {
            console.log('MongoDB connection closed');
        })
        .catch((error) => {
            console.error('Failed to close MongoDB connection', error);
        });
    })
    .catch((error) => {
        console.error('Failed to save product', error);
    });
})
.catch((error) => {
console.error('Failed to connect to MongoDB', error);
})