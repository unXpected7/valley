import axios from 'axios';

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
};

export const getBanners = async () => {
  return fetchData('https://api.testvalley.kr/main-banner/all');
};

export const getMenus = async () => {
  return fetchData('https://api.testvalley.kr/main-shortcut/all');
};

export const getProducts = async () => {
  try {
    const data = await fetchData('https://api.testvalley.kr/collections?prearrangedDiscount');
    return data.items.filter((item: any) => item.type === 'SINGLE' && item.viewType === 'TILE');
  } catch (error) {
    console.error('Error fetching collections data:', error);
    throw new Error('Failed to fetch collections data');
  }
};

