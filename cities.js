function dhan(indic, flag, mapx) {
    mapx.setCenter(dhanbad);
    mapx.setZoom(10);

    if (indic == 2) {
        dataArr = Dhan_Grid_Population
    }

    getColorArrays(dataArr, colArr);
    //gtype = Dhan_Grid_type;

    let k = 0;
    for (let i = 0; i < 55; i++)
        for (let j = 0; j < 44; j++) {
            setCoords({
                properties: {
                    lat: 23.63 + 0.01 * j, //Grid_Coodinates[0]
                    lng: 86.28 + 0.01 * i, //Grid_Coodinates[1]
                    num: k
                }
            }, mapx);
            k += 1;
        }
}