(function(){
  const CART_KEY='glowtheory-cart';
  const read=()=>{try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}catch{return[]}};
  const save=items=>{localStorage.setItem(CART_KEY,JSON.stringify(items)); renderCart();};
  const money=n=>`$${n.toFixed(2)}`;
  const cart=()=>read();
  function renderCount(){document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=cart().reduce((s,i)=>s+i.qty,0));}
  function renderCart(){
    renderCount(); const list=document.querySelector('[data-cart-items]'); if(!list)return;
    const items=cart(); list.innerHTML=items.length?items.map(i=>`<div class="cart-item"><div class="cart-thumb" style="background-image:url('${i.image}');background-position:${i.position||'center'}"></div><div class="cart-item-info"><strong>${i.name}</strong><span>${money(i.price)} · Qty ${i.qty}</span><div class="cart-item-actions"><button data-qty="${i.id}" data-change="-1" aria-label="Decrease quantity">−</button><button data-qty="${i.id}" data-change="1" aria-label="Increase quantity">+</button><button class="text-button" data-remove="${i.id}">Remove</button></div></div></div>`).join(''):'<div class="empty-cart"><span class="eyebrow">Your edit of the everyday</span><p>Your cart is currently empty.</p><a class="button button-dark" href="shop.html">Browse essentials</a></div>';
    const subtotal=items.reduce((s,i)=>s+i.price*i.qty,0); document.querySelectorAll('[data-subtotal]').forEach(e=>e.textContent=money(subtotal)); document.querySelectorAll('[data-shipping]').forEach(e=>e.textContent=money(subtotal?4:0)); document.querySelectorAll('[data-total]').forEach(e=>e.textContent=money(subtotal+(subtotal?4:0)));
  }
  window.addToCart=(id,qty=1)=>{const p=productById(id),items=cart(),found=items.find(i=>i.id===id); if(found)found.qty+=qty; else items.push({id:p.id,name:p.name,price:p.price,image:p.image,position:p.position,qty}); save(items); openCart(); const toast=document.querySelector('[data-toast]'); if(toast){toast.textContent=`${p.name} added to cart`;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}};
  function openCart(){document.querySelector('[data-cart-drawer]')?.classList.add('open');document.querySelector('[data-overlay]')?.classList.add('show');}
  function closeCart(){document.querySelector('[data-cart-drawer]')?.classList.remove('open');document.querySelector('[data-overlay]')?.classList.remove('show');}
  document.addEventListener('click',e=>{const t=e.target.closest('[data-add-cart]');if(t){e.preventDefault();addToCart(t.dataset.addCart,Number(t.dataset.qty||1));return}if(e.target.closest('[data-cart-open]'))openCart();if(e.target.closest('[data-cart-close]')||e.target.matches('[data-overlay]'))closeCart();const q=e.target.closest('[data-qty]');if(q){const items=cart(),i=items.find(x=>x.id===q.dataset.qty);i.qty+=Number(q.dataset.change);if(i.qty<=0)items.splice(items.indexOf(i),1);save(items)}const rem=e.target.closest('[data-remove]');if(rem){save(cart().filter(i=>i.id!==rem.dataset.remove))}const menu=e.target.closest('[data-menu-toggle]');if(menu)document.querySelector('[data-mobile-nav]')?.classList.toggle('open');});
  document.addEventListener('DOMContentLoaded',()=>{renderCart();document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());document.querySelectorAll('[data-faq]').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));});
})();
