import {Schema, model} from 'mongoose';

const PlaceSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "User"},
    title: {type: String, required: true},
    city: {type: String, required: true},
    photos: [{type: String, required: true}],
    description: {type: String, required: true},
    extras: {type: String, required: true},
    perks: [{type: String, required: true}],
    price: {type: Number, required: true},
    checkin: {type: String, required: true},
    checkout: {type: String, required: true},
    guests: {type: Number, required: true},
    })


export default model('Place', PlaceSchema)