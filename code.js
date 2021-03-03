//Kitap sınıfı yapılandırma
class Kitap {
    constructor(kitapAdi, kitapYazari, kitapISBN) {
      this.kitapAdi = kitapAdi;
      this.kitapYazari = kitapYazari;
      this.kitapISBN = kitapISBN;
    }
  }

  //Kullanıcı arayüzü(User Interface) metodlarını içeren sınıf tanımı
  class UI {
    kitapEkle(kitap) {
      //Yeni oluşturulan kitabın ekleneceği tabloyu seç
      const tablo = document.getElementById('kitapListesi');
      // Tabloya yeni satır ekle
      const satir = document.createElement('tr');
      // Satırda hücreleri tanımla
      satir.innerHTML = `
        <td>${kitap.kitapAdi}</td>
        <td>${kitap.kitapYazari}</td>
        <td>${kitap.kitapISBN}</td>
        <td><a href="#" class="delete">X<a></td>
      `;
    
      tablo.appendChild(satir);

    }
    kitapSay(){
        const tablo = document.getElementById('kitapListesi');
        var kayitSayisi=tablo.getElementsByTagName("tr").length-1;
        document.getElementById("sonuc").innerHTML=kayitSayisi+" adet kitap kayıtlıdır.";
    }
  
    mesajGoster(mesaj, className) {
      // Mesaj kutusu oluştur
      const mesajKutusu = document.createElement('div');
      // Oluşturulan kutuya 2 adet css stil class ataması yap(biri başarılı/diğeri hatalı durum için)
      mesajKutusu.className = `alert ${className}`;
      // Oluşturulan kutuya içerik olarak gönderilen mesajı gösterecek bir text node u ekleme
      mesajKutusu.appendChild(document.createTextNode(mesaj));
      // Mesaj kutusunu hizalamak için parent kapsayıcı nesnesini seçme
      const container = document.querySelector('.container');
      // Mesaj kutusunu hizalamak için form nesnesini seçme
      const form = document.querySelector('#formKitap');
      // Kapsayıcı içinde mesaj kutusunu formdan önceye ekleme
      container.insertBefore(mesajKutusu, form);
  
      // Mesaj kutusu 3 saniye sonra kaybolsun
      setTimeout(function(){
        document.querySelector('.alert').remove();
      }, 3000);
    }
  
    //Belirtilen hedefteki(olaydan etkilenen) satırı ve kapsayıcı td ve tr siyle sil
    kitapSil(target) {
      if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }
    }
  
    formuTemizle() {
      document.getElementById('txtKitapAdi').value = '';
      document.getElementById('txtKitapYazari').value = '';
      document.getElementById('txtKitapISBN').value = '';
    }
    
  }

// Ekleme işlemi için olay yakalayıcısı tanımlanır
document.getElementById('formKitap').addEventListener('submit', function(e){
    
  // Girilen değerler form üzerinden alınır
  const kitapAdi = document.getElementById('txtKitapAdi').value,
        kitapYazari = document.getElementById('txtKitapYazari').value,
        kitapISBN = document.getElementById('txtKitapISBN').value;

  // Yeni bir kitap nesnesi türet
  const kitap = new Kitap(kitapAdi, kitapYazari, kitapISBN);

  // Yeni bir arayüz işlemi türet
  const ui = new UI();

  console.log(ui);


    // Formu doğrula
    if(kitapAdi === '' || kitapYazari === '' || kitapISBN === '') {
        // Hata durumunda mesajı göster
        ui.mesajGoster('Lütfen tüm alanları doldurun!', 'error');
      } 
    else {
        // Türetilen kitabı arayüz metodu ile tabloya ekle
        ui.kitapEkle(kitap);
    
        // Kitap başarıyla kaydedilince mesaj göster
        ui.mesajGoster('Kitap başarıyla eklendi!', 'success');
      
        // Kaydettikten sonra formu temizle
        ui.formuTemizle();

        //Tabloda kayıtlı kitap sayısını bulup yazdıran metoda yönlendir
        ui.kitapSay();
      }


    
      //Submit olayı için varsayılan durum olan formu sunucuya göndermeyi engelle
      e.preventDefault();

});

// Silme işlemi için olay yakalayıcı tanımlanır
document.getElementById('kitapListesi').addEventListener('click', function(e){

    // Silme işlemi için yeni bir arayüz nesnesi tanımlanır
    const ui = new UI();
  
    // Olayın hedefindeki satırın silinmesi için arayüz metodunu çağır
    ui.kitapSil(e.target);
  
    // Silme işlemi başarılıysa mesaj kutusunu göster
    ui.mesajGoster('kitap Silindi!', 'success');
  
    ui.kitapSay();

    //Linke ait varsayılan davranış olan URL ye gitme durumunu engeller
    e.preventDefault();
  });