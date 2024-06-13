const express = require("express");
const db = require("../db/db");
const route = express.Router();

route.post("/add-todo", async (req, res) => {
	const todo = req.body;

	try {
		// Insert the new customer with the updated acc_code
		await db.query("INSERT INTO todo SET ?", [todo]);
		res.json({ success: true, message: "Todo added successfully" });
	} catch (error) {
		console.error("Error adding todo:", error);
		res.status(500).json({ success: false, error: "Internal server error" });
	}
});

route.get("/todo-list", async (req, res) => {
	try {
		const [result] = await db.execute("SELECT * FROM todo ");
		res.json(result);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

route.post("/update-todo", async (req, res) => {
	const data = req.body;
	const { id } = req.body;
	try {
		await db.query("UPDATE todo set ? WHERE id = ?", [data, id]);
		res.json({ success: true, message: "Todo Update successfully" });
	} catch (error) {
		console.error("Error Update:", error);
		res.status(500).json({ success: false, error: "Internal server error" });
	}
});

route.post("/delete-todo", async (req, res) => {
	const data = req.body;
	const { id } = req.body;
	try {
		await db.query("DELETE FROM todo WHERE id = ?", [id]);
		res.json({ success: true, message: "Todo Delete successfully" });
	} catch (error) {
		console.error("Error Update:", error);
		res.status(500).json({ success: false, error: "Internal server error" });
	}
});

module.exports = route;
