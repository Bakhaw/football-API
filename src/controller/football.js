import mongoose   from 'mongoose';
import { Router }   from 'express';
import Football from '../model/football';
import bodyParser from 'body-parser';

export default({ config, db }) => {
  let api = Router();
  // 'v1/football'
  // GET v1/football
  api.get('/', (req, res) => {
    Football.find({}, (err, allFoot) => {
      if (err) {
        res.send("Ceci est un message d'erreur");
      }
      res.json(allFoot);
    });
  })

// GET BY ID v1/football/:
api.get('/:id', (req, res) => {
  let _id = req.params.id;
  Football.find({_id}, (err, foot) => {
    if (err) {
      res.send("Ceci est un message d'erreur")
    }
    res.json(foot)
  })
})

  // POST
  api.post('/add', (req, res) => {
    let newFoot  = new Football();
    newFoot.name = req.body.name;
    newFoot.team = req.body.team;
    newFoot.age  = req.body.age;
    newFoot.pos  = req.body.pos;

    newFoot.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Football saved successfully' });
    });
  });

  // UPDATE v1/football/update/:id
  api.post('/update/:id', (req, res) => {
    let _id = req.params.id;
    Football.findOneAndUpdate({_id}, req.body, (err, foot) => {
      if (err) {
        res.send(err);
      }
      res.json(foot)
    })
  })


  // DELETE
  api.delete('/:id', (req, res) => {
    let _id = req.params.id;
    Football.remove({_id}, (err, deletedFoot) => {
      if (err) {
        res.send("Ceci est un message d'erreur");
      }
      res.json(deletedFoot)
    })
  })

  return api;
};
