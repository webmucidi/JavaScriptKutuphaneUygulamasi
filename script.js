class Kitap{
    constructor(kitapAdi,kitapYazari,kitapISBN){
        this.kitapAdi=kitapAdi;
        this.kitapYazari=kitapYazari;
        this.kitapISBN=kitapISBN;
    }
}

class Arayuz{
    kitapEkle(kitap){

        const tablo=document.getElementById("kitapListesi");

        const satir=document.createElement("tr");

        satir.innerHTML=`
        <td>${kitap.kitapAdi}</td>
        <td>${kitap.kitapYazari}</td>
        <td>${kitap.kitapISBN}</td>
        <td><a href="#" class="delete">X</a></td>
        `
        ;

        tablo.appendChild(satir);

    }

    mesajGoster(mesaj,className){

        const mesajKutusu=document.createElement("div");

        mesajKutusu.className=`alert ${className}`;

        mesajKutusu.appendChild(document.createTextNode(mesaj));

        const container=document.querySelector(".container");

        const form=document.querySelector("#formKitap");

        container.insertBefore(mesajKutusu,form);

        setTimeout(function(){
            document.querySelector(".alert").remove();
        },5000);

    }


    kitapSay(){
        const tablo=document.getElementById("kitapListesi");
        var kayitSayisi=document.getElementsByTagName("tr").length-1;
        document.getElementById("sonuc").innerHTML=kayitSayisi+" adet kayıtlı kitap bulunmaktadır.";

    }

    kitapSil(target){

        if(target.className === "delete")
        {
            target.parentNode.parentNode.remove();
        }

    }

    formuTemizleme(){
        document.getElementById("txtKitapAdi").value="";
        document.getElementById("txtKitapYazari").value="";
        document.getElementById("txtKitapISBN").value="";

    }

}

document.getElementById("formKitap").addEventListener("submit",function(e){

    const kitapAdi=document.getElementById("txtKitapAdi").value,
          kitapYazari=document.getElementById("txtKitapYazari").value,
          kitapISBN=document.getElementById("txtKitapISBN").value;

    const kitap=new Kitap(kitapAdi,kitapYazari,kitapISBN);

    const islem=new Arayuz();

    if(kitapAdi!=""  && kitapYazari!="" && kitapISBN!=""){
        islem.kitapEkle(kitap);
        
        islem.mesajGoster("Kitap başarıyla eklendi","success");

        islem.kitapSay();

        islem.formuTemizleme();
    }

    else{
        islem.mesajGoster("Lütfen tüm alanları doldurunuz!","error");
    }


    e.preventDefault();

});

document.getElementById("kitapListesi").addEventListener("click",function(e){

    const islem=new Arayuz();

    islem.kitapSil(e.target);

    islem.kitapSay();

    islem.mesajGoster("Kitap başarıyla silindi","success");

    e.preventDefault();

});