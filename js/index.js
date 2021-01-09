var km = document.getElementById("soKM");
var tgCho = document.getElementById("tgCho");
var tongTienCho = 0;
var tongTienDi = 0;
var tongTienTra;



document.getElementById("btnTinhTien").onclick = function(){

    
    if (document.getElementById("uberX").checked == true) {
        tinhTienCho(2000);
        tinhTienDi(8000,12000,10000);
        tinhTongTienTra(tongTienCho,tongTienDi);
    } 
    else if (document.getElementById("uberSUV").checked == true) {
        tinhTienCho(3000);
        tinhTienDi(9000, 14000, 12000);
        tinhTongTienTra(tongTienCho,tongTienDi);
    } 
    else if (document.getElementById("uberBlack").checked == true) {
        tinhTienCho(4000);
        tinhTienDi(10000, 16000, 14000);
        tinhTongTienTra(tongTienCho, tongTienDi);
    }
}

document.getElementById("btnInHoaDon").onclick = function () {

    if (document.getElementById("uberX").checked == true) {
        tinhTienDi(8000, 12000, 10000);
        inHoaDon(tongTienDi);
    }
    else if (document.getElementById("uberSUV").checked == true) {
        tinhTienDi(9000, 14000, 12000);
        inHoaDon(tongTienDi);
    }
    else if (document.getElementById("uberBlack").checked == true) {
        tinhTienDi(10000, 16000, 14000);
        inHoaDon(tongTienDi);
    }
}




function tinhTienCho(tienCho){
        tongTienCho = tienCho * tgCho.value;
}

function tinhTienDi(km1,km2,km3){
    if (soKM.value > 0 && soKM.value <1){
        tongTienDi = km1;
    }
    else if(soKM.value >= 1 && soKM.value < 21){
        tongTienDi = (km2) * (soKM.value - 1) + (km1);
    }
    else if(soKM.value >= 21){
        tongTienDi = (km3) * (soKM.value - 20) + (km2 * 20) + (km1);
    } 
}

function tinhTongTienTra(tienCho,tienDi){      
            tongTienTra = tienCho + tienDi;
            document.getElementById("divThanhTien").style.display = "block";
            document.getElementById("divThanhTien").innerHTML = tongTienTra + "VNĐ";
}

function inHoaDon(tienDi){
        document.getElementById("divThanhTien").style.display = "block";
        document.getElementById("divThanhTien").innerHTML = "Đi được: " + km.value + "km | Mất: " + tienDi + "VNĐ";
}