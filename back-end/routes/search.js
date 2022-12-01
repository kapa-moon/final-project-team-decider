let router = require('express').Router(),
list = require('../data/list');

let search_keyword = '',
a = []; /* matching results */

router.get('/', (req, res) =>
{
    res.json(search_keyword);
})

router.get('/api/print_list', (req, res) =>
{
    res.json(list);
});

router.get('/api/get_list', (req, res) =>
{
  a = [];
  let field_array = [];
  for(let i in list[0])
    field_array.push(i);
  for(let i = 0; i < list.length; ++i)
  {
    for(let j = 0; j < field_array.length; ++j)
    {
      if(list[i][field_array[j]].toString().toLowerCase().includes(search_keyword.toString().toLowerCase()))
      {
        a.push(list[i]);
        break;
      }
    }
  }
  res.json(a);
});

router.get('/search', (req, res) =>
{
  res.json(a);
});

router.post('/search', (req, res) =>
{
  search_keyword = req.body; 
  res.json(req.body);
});

module.exports = router;