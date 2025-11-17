// Small JS helpers for the demo site
document.addEventListener('DOMContentLoaded',function(){
const y = new Date().getFullYear();
const el = document.getElementById('year'); if(el) el.textContent = y;
const el2 = document.getElementById('year2'); if(el2) el2.textContent = y;


// Pre-fill booking form from URL query (e.g. packages -> booking)
const params = new URLSearchParams(location.search);
const paket = params.get('paket');
const price = params.get('price');
if(paket){
const s = document.getElementById('paketSelect');
if(s){ s.value = paket }
}


const form = document.getElementById('bookingForm');
if(form){
const waQuick = document.getElementById('waQuick');
form.addEventListener('submit', function(e){
e.preventDefault();
const data = new FormData(form);
const name = data.get('name') || '';
const phone = data.get('phone') || '';
const paketVal = data.get('paket') || '';
const persons = data.get('persons') || '1';
const date = data.get('date') || '';
// Build WhatsApp message for booking (replace number with your WhatsApp)
const waNumber = '+087700102722';
const text = encodeURIComponent(`Booking%20Request%0ANama:%20${name}%0AHP:%20${phone}%0APaket:%20${paketVal}%0AJumlah:%20${persons}%0ATanggal:%20${date}`);
const url = `https://wa.me/${waNumber.replace(/\D/g,'')}?text=${text}`;
// Open WhatsApp for confirmation
window.open(url, '_blank');
});
}
});