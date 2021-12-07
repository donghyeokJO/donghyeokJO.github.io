function getCityGU() {
    new daum.Postcode({
        oncomplete: function(data) {
            var si = data.sido
            var sigungu = data.sigungu; // 최종 주소 변수
            console.log(si);
            console.log(sigungu);
            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("location-text").value = si + ' ' + sigungu;
        }
    }).open();
}

function gotomain() {
    var location = document.getElementById("location-text").value;
    window.location.href = "index.html?location=" + location;
}

function loadmap() {
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);
}