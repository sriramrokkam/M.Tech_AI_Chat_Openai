const axios = require('axios');
let data = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "user",
            "content": "Can AI defeat humans in cricket?"
        },
    ],
    "temperature": 1,
    "top_p": 1,
    "n": 1,
    "stream": false,
    "max_tokens": 250,
    "presence_penalty": 0,
    "frequency_penalty": 0
});

let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.openai.com/v1/chat/completions',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer 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',
        'Cookie': '__cf_bm=Dx..V.EEsk8k5BltS6HvILDypgLeEda2U9OWsjrbFT8-1700634903-0-AQ0nuopdFgG6juFPvIQuMcHfwVz8hq7mS0pc942MsT9zP6bq6FWjEmebsXSwNXoCRKW5z9RfwSHF1Ri2BcDdMm8=; _cfuvid=jzsQkG6oO1DU1t5d7o5U1I3GVZUhhNc41oSKoTVVcl8-1700634903613-0-604800000'
    },
    data: data
};

axios.request(config)
    .then((response) => {
        console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
        console.log(error);
    });
