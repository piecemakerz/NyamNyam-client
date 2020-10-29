import axios from 'axios';
import {
  PredictDataAPIProps,
  PredictDataAPIResults,
} from '@base/types/predict';
import { makeAuthHeaders, domain } from './utils';
import { weatherToKorean } from './weather';

export const getPredictDataOfWeather = async ({
  currentWeather,
  store,
  accessToken,
}: PredictDataAPIProps): Promise<PredictDataAPIResults> => {
  const encoded_weather = encodeURIComponent(weatherToKorean[currentWeather]);

  const predictData = await axios.get(
    `${domain}/predict?storeId=${store}&weather=${encoded_weather}`,
    {
      withCredentials: true,
      headers: {
        ...makeAuthHeaders(accessToken),
      },
      responseType: 'json',
    }
  );
  let {
    data: { quantityData },
  } = predictData;
  quantityData = quantityData.reduce((acc, curItem) => {
    acc.push(curItem.production);
    return acc;
  }, []);

  return quantityData;
};
