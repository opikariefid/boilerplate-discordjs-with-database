const db = require('./config');
const Routes = require('../models/Config');

var main = {
    findAll: findAll,
    insert: insert,
    cekPengaturan: cekPengaturan,
    checkConnection: checkConnection,
}

function checkConnection(){
    db.authenticate().then(() => {
        console.log('Database connected...');
    }).catch(err => {
        console.log('Error: ' + err);
    })
}

async function cekPengaturan(id){
    const data = await Routes.findAll({
        where: {
            id: id
        }
    });
    return JSON.stringify(data);
}

async function findAll() {
    const data = await Routes.findAll();
    console.log("All users:", JSON.stringify(data, null, 2));
}

async function insert(data){
    const query = await Routes.create(data)
    .then(function(item){
        console.log('Success insert data.');        
    })
    .catch(function(err){
        console.log('Failed insert data.');   
    });
}

module.exports = main;