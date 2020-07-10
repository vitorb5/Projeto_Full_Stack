        const mongoose = require ('../config/database');
const { Schema } = require('../config/database');
        const Schama = mongoose.Schema;

        const TaskSchema = new Schema({
            macaddress: {type: String, require: true},
            type : {type: Number, require: true},
            title : {type: String, require: true},
            descriptiom: {type: String, require: true},
            when: {type: Date, require, require: true},
            done: {type: Boolean, default: false},
            created: {type, Date, default: Date.now()}

        })

        module.exports = mongoose.model('Task', TaskSchema);
        //module.export é pq é prciso exportar p/ outros arq ultilizaremd
        //'Task' pq é nome como ele vai gravar no banco
        //TaskSchema que o nosso objeto que a gente criou com todas infomações do protótipo