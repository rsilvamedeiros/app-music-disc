const mongoose = require("mongoose");
require("dotenv").config();

// Configurar strictQuery para evitar aviso de depreciação
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};

connectDB();
