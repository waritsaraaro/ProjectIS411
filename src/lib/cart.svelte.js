// สร้าง Object ก้อนเดียวที่เก็บทั้งข้อมูลและฟังก์ชัน
export const cartStore = $state({
    items: [], // รายการสินค้าในตะกร้า
    
    // ใช้ get เพื่อทำหน้าที่เหมือน $derived (คำนวณอัตโนมัติ)
    get total() {
        return this.items
            .filter(item => item.selected)
            .reduce((sum, item) => sum + item.price, 0);
    },
    
    get count() {
        return this.items.length;
    },  

    get selectedCount() {
        return this.items.filter(item => item.selected).length; 
    }
});

// ดึงข้อมูลตะกร้าตอนเปิดหน้าเว็บ
export async function loadCart() {
    const cus_id = localStorage.getItem("current_user_id");
    
    if (!cus_id) return;

    const res = await fetch(`http://127.0.0.1:8000/cart/${cus_id}`);
    if (res.ok) {
        cartStore.items = await res.json();
    }
}

// ฟังก์ชันสำหรับเพิ่มสินค้า
export async function addToCart(product) {
    const cus_id = localStorage.getItem("current_user_id");

    if (!cus_id) {
        alert("กรุณาเข้าสู่ระบบก่อนหยิบของใส่ตะกร้าค่ะ!");
        window.location.href = "/signin"; // เปลี่ยนเป็นลิงก์หน้า Sign In ของขิมได้เลย
        return; // หยุดทำงานตรงนี้เลย ไม่ส่งข้อมูลไปหลังบ้าน
    }

    const payload = {
        cus_id: parseInt(cus_id),
        product_id: product.product_id, // เช็กชื่อตัวแปรให้ตรงกับใน DB นะครับ
        qty: 1
    };

    const res = await fetch('http://127.0.0.1:8000/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (res.ok) {
        // เพิ่มเสร็จก็โหลดตะกร้าใหม่ให้ข้อมูลอัปเดต
        await loadCart();
    }
}

export async function removeFromCart(index) {
    const itemToRemove = cartStore.items[index];
    
    const res = await fetch(`http://127.0.0.1:8000/cart/remove/${itemToRemove.cartitem_id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        await loadCart(); // โหลดข้อมูลมาแสดงใหม่หลังลบ
    }
}

export function isInCart(product) {
    // ตรวจสอบว่ามีชื่อสินค้าชิ้นนี้อยู่ในตะกร้าหรือยัง
    if (!product) return false;
    return cartStore.items.some(c => c.product_id === product.product_id);
}

