//1-Sergilenecek ürünü yapılandıran sınıf
class Kitap{
    constructor(kitapAdi,kitapYazari,kitapISBN){
        this.kitapAdi=kitapAdi;
        this.kitapYazari=kitapYazari;
        this.kitapISBN=kitapISBN;
    }
}

//2-Ürünü sergileyecek reyonları,satıcıları,tezgahtarları,vitrini vs. tanımlayan sınıf ve içindeki metodlar
class Arayuz{
    kitapEkle(){

    }

    kitapSil(){

    }

    kitapSay(){

    }

    mesajGoster(){

    }

    zamanAsimi(){

    }

    formuTemizle(){

    }

}

//3-Ekleme ve silme işlemlerini tetikleyecek olay tanımlayıcıları oluştur(form submit olayı-delete link click olayı)
document.getElementById("formKitap").addEventListener("submit",function(e){

    e.preventDefault();
});

document.getElementById("kitapListesi").addEventListener("click",function(e){

    e.preventDefault();
});