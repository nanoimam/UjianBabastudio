const Kursus = require('../models/Kursus')

exports.home = (req,res) =>{
    res.send("welcome to API Shop")

}

exports.listKursus = async(req,res) => {
    let data = await Kursus.find()
    res.send(JSON.stringify({"status" :200, "error" : null, "response" :data}))
}

exports.detailKursus = async (req,res) => {
    const data = await Kursus.findById(req.params.id)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" :data}))
}

exports.tambahKursus = async(req,res) => {
    const Kursuss = new Kursus(req.body)
    const status = await Kursuss.save()
    res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
}

exports.ubahKursus = async(req,res) => {
    const {id} = req.params
    const status = await Kursus.update({_id : id}, req.body)
    res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
}

exports.hapusKursus = async(req,res) => {
    const { id } = req.params
    const status = await Kursus.remove({_id : id})
    res.send(JSON.stringify({"status" : 200, "error" :null, "response" : status}))
}