const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/categories.json');

exports.getCategories = (req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;

        const categories = JSON.parse(data);
        res.json(categories);
    });
};

exports.createCategory = (req, res) => {
    const newCategory = req.body;
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;

        let categories = [];
        try {
            categories = JSON.parse(data);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            return res.status(500).send('Error parsing data');
        }

        categories.push(newCategory);
        fs.writeFile(filePath, JSON.stringify(categories), (err) => {
            if (err) throw err;
            res.status(201).json(newCategory);
        });
    });
};
