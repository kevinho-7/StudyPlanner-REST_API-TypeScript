import Express = require("express");

const app = Express();

app.get("/", (req, res) => {
    res.send("Heyy whats up??\n Welcome to 'Study Planner API!'")    
});

app.listen(5000, () => {
    console.log("Server runing on port 5000")
});