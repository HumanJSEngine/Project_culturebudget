const GetDateList = (items) => {
    let arr = [];
    // items.forEach((item) => arr.push(item.ehDate.slice(0, 10)));
    let dayhap = 0;

    items.forEach((item) =>
        arr.push({ date: item.ehDate.slice(0, 10), price: item.ehPrice })
    );

    // //날짜가 중복되는 배열 반환
    // let overlapdate = arr.filter(
    //     (item, index, arr) => item.edDate === arr[index].edDate
    // );
    return arr;
};

export default GetDateList;

// 달력에 출력할 (날짜,가격) 객체를 배열로 반환
