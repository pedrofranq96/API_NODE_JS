const mongoose = require('mongoose');

async function main() {
    try {

        mongoose.set("strictQuery", true);
       await mongoose.connect(
        "mongodb+srv://pedrofranq96:dlAeioNnGuePzGau@cluster0.61yx63u.mongodb.net/?retryWrites=true&w=majority"
       ); 
       console.log("conectado com sucesso.");
    } catch (error) {
        console.log(`Erro ${error}`);
    }
}

module.exports = main;
