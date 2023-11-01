const { Schema, model } = require('mongoose')

const CharactersSchema = new Schema({
    _id: Schema.Types.ObjectId,
    owner: { type: String, required: true },
    CharacterName: { type: String, required: true },
    imageURL: String,
    description: String,
    po: Number,
    pv: { type: Number, minimum: 0, maximum: 7 },
    competences: {
        force: { type: Number, minimum: 0, maximum: 10, required: true },
        mentir_convaincre: { type: Number, minimum: 0, maximum: 10, required: true },
        intelligence: { type: Number, minimum: 0, maximum: 10, required: true },
        courir_sauter: { type: Number, minimum: 0, maximum: 10, required: true },
        perception: { type: Number, minimum: 0, maximum: 10, required: true },
        connaissance: { type: Number, minimum: 0, maximum: 10, required: true },
        dexterite: { type: Number, minimum: 0, maximum: 10, required: true },
        combat: { type: Number, minimum: 0, maximum: 10, required: true },
        discretion: { type: Number, minimum: 0, maximum: 10, required: true },
    }
});

module.exports = model("Character", CharactersSchema, "Characters");