const router = require('express').Router();
const axios = require('axios');
const config = require('../config.js');

const headers = { headers: {'Authorization': config.TOKEN} };

//////////////////////////////////////////////////////////////
//      PRODUCTS      ////////////////////////////////////////
//////////////////////////////////////////////////////////////

router.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', headers)
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(401).json(err));
});

router.get('/products/:product_id', (req, res) => {
  const { product_id } = req.params;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product_id}`, headers)
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(401).json(err));
});

router.get('/products/:product_id/styles', (req, res) => {
  const { product_id } = req.params;

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product_id}/styles`, headers)
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(401).json(err));
});

router.get('/products/:product_id/related', (req, res) => {
  const { product_id } = req.params;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${product_id}/related`, headers)
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(401).json(err));
});

//////////////////////////////////////////////////////////////
//      REVIEWS      /////////////////////////////////////////
//////////////////////////////////////////////////////////////

router.get('/reviews/:product_id/:sort/:page/:count', (req, res) => {
  var product_id = req.params.product_id;
  var sort = req.params.sort;
  var page = req.params.page;
  var count = req.params.count;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${product_id}&sort=${sort}&page=${page}&count=${count}`, headers)
    .then(data => res.status(200).json(data.data))
    .catch(err => res.status(401).json(err));
});

//test to sweep all reviews for info
router.get('/reviews/:product_id', (req, res) => {
  var product_id = req.params.product_id;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${product_id}&count=500`, headers)
    .then(data => res.status(200).json(data.data))
    .catch(err => res.status(401).json(err));
});

router.get('/reviews/meta/:product_id', (req, res) => {
  var product_id = req.params.product_id
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${product_id}`, headers)
    .then(data => res.status(200).json(data.data))
    .catch(err => res.status(401).json(err));
});

router.post('/reviews', (req, res) => {
  var data = req.body;
  headers.headers.contentType = 'application/json';
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', data, headers)
    .then(({ data }) => {
      console.log('No error server side');
      res.status(201).json(data);
    })
    .catch(err => {
      console.log('An error is triggered server side');
      res.status(401).json(err);
    });
});

router.put('/reviews/:review_id/helpful', (req, res) => {
  const { review_id } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/helpful`, headers)
    .then(({ data }) => res.status(204).json(data))
    .catch(err => res.status(401).json(err));
});

router.put('/reviews/:review_id/report', (req, res) => {
  const { review_id } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${review_id}/report`, headers)
    .then(data => res.status(204).json(data))
    .catch(err => res.status(401).json(err));
});

//////////////////////////////////////////////////////////////
//      Q&A      /////////////////////////////////////////////
//////////////////////////////////////////////////////////////

router.get('/qa/questions', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', headers)
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(401).json(err));
});

router.get('/qa/questions/:question_id/answers', (req, res) => {
  const { question_id } = req.params;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/answers`, headers)
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(401).json(err));
});

router.post('/qa/questions', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', headers)
    .then(data => res.status(201).json(data.data))
    .catch(err => res.status(401).json(err));
});

router.put('/qa/questions/:question_id/helpful', (req, res) => {
  const { question_id } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/helpful`, headers)
    .then(({ data }) => res.status(204).json(data))
    .catch(err => res.status(401).json(err));
});

router.put('/qa/questions/:question_id/report', (req, res) => {
  const { question_id } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/report`, headers)
    .then(({ data }) => res.status(204).json(data))
    .catch(err => res.status(401).json(err));
});

router.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const { answer_id } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer_id}/helpful`, headers)
    .then(({ data }) => res.status(204).json(data))
    .catch(err => res.status(401).json(err));
});

router.put('/qa/answers/:answer_id/report', (req, res) => {
  const { answer_id } = req.params;
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer_id}/report`, headers)
    .then(({ data }) => res.status(204).json(data))
    .catch(err => res.status(401).json(err));
});

//////////////////////////////////////////////////////////////
//      CART      ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

router.get('/cart', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', headers)
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(401).json(err));
});


router.post('/cart', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', headers)
    .then(({ data }) => res.status(201).json(data))
    .catch(err => res.status(401).json(err));
});

//////////////////////////////////////////////////////////////
//      POST      ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

router.post('/interactions', (req, res) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions', headers)
    .then(({ data }) => res.status(201).json(data))
    .catch(err => res.status(401).json(err));
});

module.exports = router;

//////////////////////////////////////////////////////////////
//      TEST CHARACTERISTICS      ////////////////////////////
//////////////////////////////////////////////////////////////

router.get('/characteristics', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/characteristics', headers)
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(401).json(err));
});