const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fetch = require('isomorphic-fetch');

app.use(express.static('public'));

app.get('/api', async (req, res) => {
    const response = await fetch('https://alwaysbrokenform-default-rtdb.europe-west1.firebasedatabase.app/data.json');
    const data = await response.json();

    if (Array.isArray(data)) {
        const index = Math.floor(Math.random() * data.length);

        return res.json(data[index]);
    }

    return res.json({
        title: 'АХАХХААХ',
        description: 'реал ошибка'
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})