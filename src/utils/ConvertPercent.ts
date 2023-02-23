const ConvertPercent = function (statdata) {
    let arr = [...statdata];
    let hap = 0;
    arr.forEach((item) => (hap += item.ehPrice));
    return hap;
};

export default ConvertPercent;
