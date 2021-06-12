const Subject = require('../models/subject.model');

const createSubject = async (req, res) => {
    if(req.body) {
        const subject = new Subject(req.body);
        await subject.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

const getSubject = async (req, res) => {
    await Subject.find({ amount: {$lt: 3000}})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}


module.exports = {
    createSubject,
    getSubject
};