const express=require('express');
const router=express.Router();
const arr=[{id:1 , name:"syrine", email:"syrine@gamil.com", adress:"tunis"}
,{id:2 , name:"mayssa", email:"mayssa@gamil.com", adress:"sousse"}
,{id:3 , name:"sawsen", email:"sawsen@gamil.com", adress:"tunis"}];
router.get('/all', (req, res)=> {
    res.send(arr)
});
router.get('/:id', (req, res)=> {
    const id = req.params.id;
    const entry = arr.find(item => item.id === parseInt(id));
    if (entry) {
        res.send(entry);
    } else {
        res.status(404).send("Entry not found");
    }
});
module.exports = router;