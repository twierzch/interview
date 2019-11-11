const fs = require('fs');

const csv = require('csv-parser');


const results = [];

fs.createReadStream('./data/DAMKBAoDBwoDBAkOBAYFCw.csv')
  .pipe(csv())
  .on('data', data => {
    data.Clicks = Number(data.Clicks);
    data.Impressions = Number(data.Impressions);
    
    results.push(data)
  })
  .on('end', () => {
    fs.writeFile('./public/data.json', JSON.stringify(results), (err) => {
      if (err) {
        console.log('Ups, something went wrong!');
        return;
      }

      console.log('File transformem and saved in the public folder.')
    })
  });
