var mongoose = require('mongoose')

var KursusSchema = mongoose.Schema({
    nama_kursus: {
        type:String,
        required:true
    },
    total_durasi: {
        type:Number
    },
    total_murid: {
        type:Number,
        required:true
    },
    jumlah_video:{
        type:Number,
        required:true
    },
    harga:{
        type:Number,
        required:true
    },
    img:{
        type: String
    },
},
{
    timestamps:true
})

var Kursus = module.exports = mongoose.model('kursus', KursusSchema)