var express = require('express');
var router = express.Router();
const cors = require('cors');
const pool = require('./db');


router.use(cors());
router.use(express.json());//req.body

/* GET home page. */
router.get('/', function(req, res, next) {
});

//Get all product types

router.get('/producttypes', async(req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM producttypes");
    res.json(allTodo.rows);

  } catch (err) {
    console.error(err.message);
  }
});

//Get all products
router.get('/products', async(req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM products");
    res.json(allTodo.rows);

  } catch (err) {
    console.error(err.message);
  }
});

//Get all options
router.get('/options', async(req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM option");
    res.json(allTodo.rows);

  } catch (err) {
    console.error(err.message);
  }
});

//Get all topping

router.get('/topping', async(req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM topping");
    res.json(allTodo.rows);

  } catch (err) {
    console.error(err.message);
  }
});

//Get all sugar

router.get('/sugar', async(req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM sugar");
    res.json(allTodo.rows);

  } catch (err) {
    console.error(err.message);
  }
});

//Get all ice

router.get('/ice', async(req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM ice");
    res.json(allTodo.rows);

  } catch (err) {
    console.error(err.message);
  }
});

//Get size by id

router.get('/size', async(req, res) => {
  try {
    const allTodo = await pool.query(`SELECT products.id, products.name as products_name, size.id as sizeid, size.name
    FROM products, size
    WHERE products.sizeid = size.id
    ORDER BY products.name`);
    res.json(allTodo.rows);

  } catch (err) {
    console.error(err.message);
  }
});

//Get a products
router.get('/products/:id', async(req, res) => {
  try {
    const {id} = req.params;
    const allTodo = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    res.json(allTodo.rows[0]);

  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

