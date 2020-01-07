const kursusController = require('../controller/kursusController')


module.exports = app => {
    app.get('/', kursusController.home)

    app.get('/kursus', kursusController.listKursus)
    app.get('/kursus/:id', kursusController.detailKursus)
    app.post('/kursus/', kursusController.tambahKursus)
    app.put('/kursus/:id', kursusController.ubahKursus)
    app.delete('/kursus/:id', kursusController.hapusKursus)

    
 
}