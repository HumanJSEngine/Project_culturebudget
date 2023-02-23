const GetTotal = (items: []) => {
  let hap = 0;
  items.forEach((item) => (hap += item.ehPrice));
  return hap;
};

export default GetTotal;
