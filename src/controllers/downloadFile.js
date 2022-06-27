/* eslint-disable no-undef */
const path = require('path');

const downloadFile = async (req,res) => {
    const file = path.join(__dirname, '../profiles.json');
    console.log(file);
    await res.download(path.join(__dirname, '../../profiles.json'), (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Your file has been downloaded!');
    });
};

module.exports = {
    downloadFile
};