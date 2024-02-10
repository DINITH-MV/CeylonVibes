import express from 'express';
import { Catagory, Offers } from '../models/storeModel.js';
import { Nuts, Snacks, Sweetners } from '../models/storeModel.js';

const router = express.Router();

// Routes for Catagories
// for Read 
router.get('/api/catagories', (req, res) => {
  Catagory.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// For Read part odf Update
router.get('/api/catagories/:id', (req, res) => {
  const { id } = req.params
  Catagory.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
  .catch (err => {
     console.log(err);
     res.status(500).json({ message: 'Server error' });
  })
});

router.post('/api/catagories', (req, res) => {
  const newCatagory = new Catagory(req.body);
  console.log(newCatagory);
  
  newCatagory.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// Routes for Nuts & Seeds
router.get('/api/Nuts&Seeds', (req, res) => {
  Nuts.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

router.get('/api/Nuts&Seeds/:id', (req, res) => {
  const { id } = req.params
  Nuts.find({_id:id}).then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
  .catch (err => {
     console.log(err);
     res.status(500).json({ message: 'Server error' });
  })
});

// Routes for Snacks
router.get('/api/Snacks', (req, res) => {
  Snacks.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});


// Routes for Sweetners
router.get('/api/Sweetners', (req, res) => {
  Sweetners.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});
router.post('/api/Sweetners', (req, res) => {
  const newSweetners = new newSweetners(req.body);
  console.log(newSweetners);
  newSweetners.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

// Routes for Offers
router.get('/api/offers', (req, res) => {
  Offers.find().then(item => {
    console.log(item);
    res.status(200).json({ message: 'Item fetched successfully', data: item, });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});

router.post('/api/offers', (req, res) => {
  const newNuts = new Nuts(req.body);
  console.log(newUser);
  newUser.save().then(item => {
    console.log(item);
    res.status(201).json({ message: 'Item added successfully' });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Server error' });
    });
});



export default router;