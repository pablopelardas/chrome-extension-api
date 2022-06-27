const fs = require('fs');

const writeProfile = async (req,res) => {
    const profiles = req.body;
    const json = JSON.stringify(profiles);
    fs.writeFile('./profiles.json', json, (err) => {
        if (err) res.send('Something went wrong');
        res.send('The JSON has been saved!');
    });
};

module.exports = {
    writeProfile
};