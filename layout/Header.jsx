

export default function Header() {

    return (
        <div className="navbar bg-green-500 h-20 mx-auto flex items-center justify-between">
    <button type="button" className="btn bg-green-600 text-white shadow-md hover:shadow-lg pl-2 ml-3 mt-2 w-64 h-10">เข้าสู่ระบบ/สมัครสมาชิก</button>
    
    <a href="./UserHome.jsx" className="btn btn-ghost text-[36px] text-white text-center">Book-Click</a>
    
    <div className="flex items-center justify-center">
        <input type="text" placeholder="ค้นหาหนังสือ" className="bg-gray-100 w-[300px] h-[40px] pl-2 rounded-[10px] mx-4"/>
        
        <button type="button" className="btn bg-green-600 w-24 h-10 rounded-[10px] text-white">ตระกร้าสินค้า</button>
        
        <img src="/src/img/icon/bell.png" alt="bell" className="w-[30px] h-[30px] ml-4 mr-5"/>
    </div>
</div>
    );
}