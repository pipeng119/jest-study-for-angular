const objToSearchStr = (obj: Record<string, string | number>) => {
  const strPairs: string[] = [];
  Object.entries(obj).forEach(keyvalue => {
    const [key, value] = keyvalue;
    const pair = `${key}=${value + ''}`
    strPairs.push(pair);
  });
  return strPairs.join('&')
};

export default objToSearchStr;