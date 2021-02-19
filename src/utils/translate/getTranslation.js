import config from '../../config';
import axios from 'axios';

const getTranslation = async (origin, subject) => {
  try {
    const {
      data: { data },
    } = await axios({
      method: 'POST',
      url: `${config.REACT_APP_API}/translate`,
      data: {
        origin,
        subject,
      },
    });
    return data;
  } catch (error) {
    alert(error);
  }
};

export default getTranslation;
