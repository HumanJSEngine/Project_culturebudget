const ConvertStatData = (items) => {
    const color = [
        'hsl(273, 70%, 50%)',
        'hsl(75, 70%, 50%)',
        'hsl(37, 70%, 50%)',
        'hsl(297, 70%, 50%)',
        'hsl(277, 70%, 50%)',
    ];
    let statdata = [];
    let priceTotal = 0;
    items.forEach((item) => (priceTotal += item.ehPrice));
    items.forEach((item, idx) =>
        statdata.push({
            id: item.ehSeq,
            label: item.ehSeq,
            value: Math.round((item.ehPrice / priceTotal) * 1000),
            color: color[Math.floor(Math.random() * 4 + 1)],
        })
    );
    return statdata;
};

export default ConvertStatData;
