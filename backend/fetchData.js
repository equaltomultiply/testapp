const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('https://emptesting.site/phpapi.php');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

module.exports = fetchData;
