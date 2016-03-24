var geolocation = {
    earthRadiusKm: 6371.009,

    distenceInKm: function (lon1, lat1, lon2, lat2) {
        if (lat1 -lat2 > 5 || lon1 - lon2 > 5) {
            return Math.asin(Math.sin(lon1)*Math.sin(lon2) + Math.cos(lon1)*Math.cos(lon2)*Math.cos(lat1-lat2)) * earthRadiusKm;
        } else {
            return 2*Math.asin( Math.sqrt( Math.pow((lon1-lon2)/2, 2) + Math.cos(lon1)*Math.cos(lon2)*Math.pow((lat1-lat2), 2) ) ) * earthRadiusKm;
        }
    }
};

module.exprts = geolocation;

/**
    TO-DO: adj. threshold
**/
