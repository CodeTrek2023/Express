const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
	// Implementation ......
	res.send("GET: get all records");
});

router.get("/:id", (req, res) => {
	// Implementation ......
	res.send(`GET: get record ${req.params.id}`);
});

router.post("/", (req, res) => {
	console.log(req.headers.authorization);

	console.log(req.header("custom-header1"));
	console.log(req.header("custom-header2"));

	console.log(req.body.name);
	console.log(req.body.email);
	console.log(req.body.message);

	// Implementation ......
	
	res.json({"aaa": "AAA", "bbb": "BBB"});
});

router.put("/:id", (req, res) => {
	// Implementation ......
	res.send(`PUT: update record ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
	// Implementation ......
	res.send(`DELETE: delete record ${req.params.id}`);
});

module.exports = router;