var express = require('express');
var router = express.Router();

const ListFilm = [
    {
      id: 1,
      title: 'avatar',
      duration: 150,
      budget: 500000,
      link: "https://www.imdb.com/title/tt0499549/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_avatar",
    },
    {
      id: 2,
      title: 'Percy Jackson and the Olympians',
      duration: 130,
      budget: 200000,
      link: "https://www.imdb.com/title/tt12324366/?ref_=hm_hp_cap_pri_hero-video-3_3",
  
    },
    {
      id: 3,
      title: 'Ant-man',
      duration:140,
      budget: 400000,
      link: "https://www.imdb.com/title/tt0478970/?ref_=fn_al_tt_1",
    },
  ];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(ListFilm);
});

module.exports = router;