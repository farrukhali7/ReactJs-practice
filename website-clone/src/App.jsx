import { useState } from 'react';
import './App.css'; 
import 'tailwindcss'; 

function App() {
  return (
    <>
      <div className="flex items-center justify-between bg-yellow-300 p-4 flex-wrap">
        <img 
          src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" 
          alt="Logo" 
          class="h-6"
        />
        <div className="flex-grow mx-4 rounded-md">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-2xl p-2 bg-white border border-gray-300 rounded-md ml-6"
          />
        </div>
        <button className="font-bold text-grey py-2 px-4 rounded-md">
          Log in
        </button>
        <div className="flex items-center space-x-4">
          <img 
            src="https://f.nooncdn.com/s/app/com/noon/icons/user_thin.svg" 
            alt="Image 3" 
            class="h-6 mr-10"
          />| 
          <img 
            src="https://f.nooncdn.com/s/app/com/noon/icons/wishlist-dark.svg" 
            alt="Image 4" 
            class="h-6 ml-10" 
          />
          <img 
            src="https://f.nooncdn.com/s/app/com/noon/icons/cart_2.svg" 
            alt="Image 5" 
            class="h-6 mr-7" 
          />
        </div>
      </div>

      {/* Discount */}
      <div class='flex-wrap'>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a6706a76-d65d-4781-aa66-fbcaa92affcc.png" alt="discount img" class="pt-1 pb-1"/>
      </div>

      {/* carousel */}
      <div class='flex flex-wrap'>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/bb4beb98-9e1a-432a-8725-f74ed858338a.gif" alt="" class="w-185 h-70 mb-2" />
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/12d3e1cf-7458-4783-aae2-604ae8126d54.png" alt="" class='w-70 h-70 mb-1' />
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8d89fcb2-68e0-4fa7-83a7-11fba284094e.png" alt="" class="w-70 mb-1 h-70" />
      </div>

      {/* Categories */}
      <div class="flex bg-orange-100 flex-wrap" >
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2b5a5f4e-5b9d-48f3-ae5d-cd00f52fcc2e.gif" alt="" class="h-30 m-3" />
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/c914d754-deb2-4696-9369-2dd9ec230941.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/774ab4c6-2e57-408f-ab63-0947b634a5a9.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/71e68fed-e518-40ba-91a3-c6eebd40194a.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2b5a5f4e-5b9d-48f3-ae5d-cd00f52fcc2e.gif" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a901e2cb-4af3-48f3-9231-99f985e6c860.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/bfcd38fe-1d54-4800-8df4-c06ccafaa0d2.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/7c6266a1-5948-43fd-9a0d-899f0c0affc1.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/49d1511b-6e1b-498b-8cca-e323954f9c02.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a646a43b-f901-4346-86b8-3b4026cfa8b0.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/051f8191-c11a-4adf-955d-4239ece98238.png" alt="" class="h-30 m-3"/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/4144c09a-ff88-45d0-8137-5060ebcc9750.png" alt="" class="h-30 m-3"/>
      </div>

      {/* boxes */}
      <div class='m-4 flex flex-wrap'>
        <div class='bg-yellow-300 h-130 w-90 mb-2'>
          <span class='p-4'><i><b>MORE REASONS TO <span class='text-red-600'>SHOP</span></b></i></span>
          <div class='flex'>
          <img src="https://f.nooncdn.com/mpcms/EN0001/assets/58148da9-50f1-49b4-939a-c9e9ffe4b756.png" alt="" class='h-45 w-40 mr-2 ml-3 mt-5'  />
          <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8510520a-6a55-4871-8e30-00e624dc1218.png" alt="" class='h-45 w-40 mr-3 ml-2 mt-5' />
          </div>
          <div class='flex'>
          <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b2bf8759-55be-43c3-a300-260d9ec9540b.png" alt="" class='h-45 w-40 mr-2 ml-3 mt-7' />
          <img src="https://f.nooncdn.com/mpcms/EN0001/assets/abb6921f-7493-4427-889f-08f3a0e48f06.png" alt="" class='h-45 w-40 mr-3 ml-2 mt-7' />
          </div>
        </div>

        {/* box 2 */}
        <div class='bg-yellow-300 h-130 w-112 ml-4 flex-wrap'>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/c28b8a63-e38b-4d80-916f-1a0bb79d57a3.png" alt="" />
        
      <div class='flex'>
        <div className="rounded-lg h-51 w-50 overflow-hidden shadow-lg bg-white m-3">
      <center>
      <img 
        src="https://f.nooncdn.com/p/pnsku/N70059970V/45/_/1715951991/d912a626-c681-431a-b399-130385ddd943.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-30 object-cover"
      />
      </center>
      <div className="p-4 bg-gray-200">
        <p class='text-sm'>Honor X9b Dual SIM</p>
        <p class='text-sm'>
          Emerald green 8BG RAM...
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 line-through text-lg">1199</span>
          <span className="text-xl font-bold text-black-500">949 AED</span>
        </div>
      </div>
    </div>

    <div className="rounded-lg h-51 w-50 overflow-hidden shadow-lg bg-white m-3">
      <center>
      <img 
        src="https://f.nooncdn.com/p/pnsku/N70089575V/45/_/1740304801/a35ddba8-172c-468e-a664-0b88569a17bc.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-30 object-cover"
      />
      </center>
      <div className="p-4 bg-gray-200">
        <p class='text-sm'>Xiaomi 65Inch 4k QLED</p>
        <p class='text-sm'>
          PRO TV | Google TV
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 line-through text-lg">2399</span>
          <span className="text-xl font-bold text-black-500">1659 AED</span>
        </div>
      </div>
    </div>
    </div>
      <div class="flex" >
    <div className="rounded-lg h-51 w-50 overflow-hidden shadow-lg bg-white m-3">
      <center>
      <img 
        src="https://f.nooncdn.com/p/pzsku/Z7FEB90E61957FCCF0907Z/45/_/1742376720/6b2a4ddf-b169-41f2-9153-73c9aaae6cdc.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-30 object-cover"
      />
      </center>
      <div className="p-4 bg-gray-200">
        <p class='text-sm'>Khlzana Trench Abaya with Shella</p>
        <p class='text-sm'>
          
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 line-through text-lg">300</span>
          <span className="text-xl font-bold text-black-500">124 AED</span>
        </div>
      </div>
    </div>

    <div className="rounded-lg h-51 w-50 overflow-hidden shadow-lg bg-white m-3">
      <center>
      <img 
        src="https://f.nooncdn.com/p/pzsku/Z37F7CA2F9C1777B3538AZ/45/_/1739784076/b2ad8c8e-efef-4de1-b054-dc945f7a862f.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-30 object-cover"
      />
      </center>
      <div className="p-4 bg-gray-200">
        <p class='text-sm'>NYX PROFFESSIONAL MAKEUP</p>
        <p class='text-sm'>
          Fat Oil Lip Drip...
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 line-through text-lg">50</span>
          <span className="text-xl font-bold text-black-500">26 AED</span>
        </div>
      </div>
    </div>
    </div>
        </div> 

        {/* box 3 */}
        <div class='bg-yellow-300 h-130 w-107 ml-4 flex-wrap mt-2'>
          <span class='p-4'><i><b>IN <span class='text-red-600'>FOCUS</span></b></i></span>
          <div>
          <img src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-01%20(1).1742367339.3466096.png" alt="" class='h-49 mr-3 ml-2 mt-5'  />
          <img src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-02%20(4).1741695494.7442565.png" alt="" class='h-49 mr-3 ml-2 mt-5' />
          </div>
        </div>
      </div>

      {/* New Recommend for you */}
      <div>
        <h1 class='text-4xl ml-6 mb-4'><b><i><span class='text-red-600'>RECOMMEND</span> FOR YOU</i></b></h1>
      </div>
      <div class='flex flex-wrap'>


      <div className="rounded-lg shadow-lg bg-white w-50 h-100 ml-3">
      <img 
        src="https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <p>Samsung Galaxy S24 Ultra 5G</p>

        <p className="text-gray-600">
          Dual SIM Titanium Gray 12GB RAM 256 GB...
        </p>

        <div className="mt-1 flex items-center space-x-2">
          <span className="text-lg">AED 2949</span>
          <span className="text-gray-500 line-through text-sm">4949</span>

          <span className="text-xl font-bold text-green-500">40%</span>
        </div>
      </div>
    </div>
  {/*  */}
  <div className="rounded-lg shadow-lg bg-white w-50 h-100 ml-3">
      <img 
        src="https://f.nooncdn.com/p/pnsku/N70105592V/45/_/1726043633/aa2f8393-ed30-467b-b456-c8b10fad6e8f.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <p>Apple Iphone 16 Pro Max</p>

        <p className="text-gray-600">
         256GB Desert Titanium 5G
        </p>

        <div className="mt-1 flex items-center space-x-2">
          <span className="text-lg">AED 4449</span>
          <span className="text-gray-500 line-through text-sm">5099</span>

          <span className="text-xl font-bold text-green-500">12%</span>
        </div>
      </div>
    </div>
  
  {/*  */}
  <div className="rounded-lg shadow-lg bg-white w-50 h-100 ml-3">
      <img 
        src="https://f.nooncdn.com/p/v1686137286/N53359914A_1.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <p>Apple iPad 2022(10th Generation)</p>

        <p className="text-gray-600">
          10.9-inch 64GB
        </p>

        <div className="mt-1 flex items-center space-x-2">
          <span className="text-lg">AED 1127</span>
          <span className="text-gray-500 line-through text-sm">1849</span>

          <span className="text-xl font-bold text-green-500">39%</span>
        </div>
      </div>
    </div>
  {/*  */}
  <div className="rounded-lg shadow-lg bg-white w-50 h-100 ml-3">
      <img 
        src="https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <p>Apple iPhone 15 Pro Max</p>

        <p className="text-gray-600">
          256GB Natural Titanium 5G
        </p>

        <div className="mt-1 flex items-center space-x-2">
          <span className="text-lg">AED 4099</span>
          <span className="text-gray-500 line-through text-sm">5099</span>

          <span className="text-xl font-bold text-green-500">19%</span>
        </div>
      </div>
    </div>
  {/*  */}
  <div className="rounded-lg shadow-lg bg-white w-50 h-100 ml-3">
      <img 
        src="https://f.nooncdn.com/p/pnsku/N53374783A/45/_/1717586721/941992f0-dae7-4a62-830b-92a7fe485329.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <p>Samsung Galaxy S23 Ultra</p>

        <p className="text-gray-600">
          5G Dual SIM Phantom Black
        </p>

        <div className="mt-1 flex items-center space-x-2">
          <span className="text-lg">AED 2579</span>
          <span className="text-gray-500 line-through text-sm">4949</span>

          <span className="text-xl font-bold text-green-500">47%</span>
        </div>
      </div>
    </div>
  {/*  */}
  <div className="rounded-lg shadow-lg bg-white w-50 h-100 ml-3">
      <img 
        src="https://f.nooncdn.com/p/v1668527232/N39265265A_1.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <p>Xiaomi Mi Android TV Stick</p>

        <p className="text-gray-600">
          Built in Chromecast - Full HD
        </p>

        <div className="mt-1 flex items-center space-x-2">
          <span className="text-lg">AED 133</span>
          <span className="text-gray-500 line-through text-sm">399</span>

          <span className="text-xl font-bold text-green-500">66%</span>
        </div>
      </div>
    </div>
  </div>

    {/* PICTURE */}
    <div class='mt-6 mb-5 ml-2 mr-2 flex-wrap shadow-lg'>
      <img src="https://f.nooncdn.com/ads/banner-1440x1440/PC%20Ad%20Banner%201440x200px.1740116822.5159345.png" alt="" />
    </div>

    {/* Ramadan essentials */}
    <div class='bg-orange-100 mt-6'>
      <div>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/17d29404-5361-45da-a39e-6bcdefbd8a1e.png" alt="" />
      </div>
      <div className='flex flex-wrap mt-3'>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a30c905a-4c97-488e-aeae-7f1b14b26732.png" alt="" class='ml-3 h-78'/>
        <img src="https://f.nooncdn.com/mpcms/EN0002/assets/e51a27f7-6528-4f45-b80c-51cd49a1e94a.png" alt="" class='ml-3 h-78'/>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/55b1226c-0eb2-4caf-866d-c54b5e50a052.png" alt="" class='ml-3 h-78'/>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8d26aab4-cfff-4769-9091-ebc8fd7c39d7.png" alt="" class='ml-3 h-78' />
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/7ca559bb-edae-4a13-b92c-f3c9bfc3756c.png" alt="" class='ml-3 h-78' />
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a1cf9227-c4f5-4e6e-9273-10779069e659.png" alt="" class='ml-3 h-78' />
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a4fb0365-e21f-4028-abd1-9e124995b02c.png" alt="" class='ml-3 h-78' />
      </div>
    </div>

    {/* 50% off  */}
    <div class='mt-6'>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a515fd40-da7d-4cbb-b690-fe0a71f4ff23.png" alt="" />
      <div className='flex flex-wrap mt-3'>
        {/*  */}
        <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/Z0D46B1BF1F048F18B94FZ/45/_/1742374050/c43f0d25-2206-427f-baa5-e0fa3f936d4b.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">Threadz by Ajooni</p>

        <p className="text-gray-600 ml-1 ">
          Button Detail Belted Dress...
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 77</span>
          <span className="text-gray-500 line-through text-sm">709</span>

          <span className="text-lg font-bold text-green-500">89%</span>
        </div>
      </div>
    </div>
        {/*  */}
        <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-50 ml-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/Z61E886D13430E849B011Z/45/_/1726948466/86011fb4-1c7e-488d-b276-1cf2c994adfc.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">Demure Pocket</p>

        <p className="text-gray-600 ml-2">
          Detail Embroidered Dress...
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 599</span>
          <span className="text-gray-500 line-through text-sm">1595</span>

          <span className="text-lg font-bold text-green-500">62%</span>
        </div>
      </div>
    </div>
        {/*  */}
        <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/Z500663E7FB1AE2AB593EZ/45/_/1739960835/62c9b4c6-19c5-4722-8f9d-4979e12e72a7.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">HANA & SARA UNIQUE LONG PRINTED ...</p>

        <p className="text-gray-600">
          Button Detail Belted Dress...
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 69</span>
          <span className="text-gray-500 line-through text-sm">320</span>

          <span className="text-lg font-bold text-green-500">78%</span>
        </div>
      </div>
    </div>
        {/*  */}
        <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/Z841FC5ED8C0E8D8BE6FAZ/45/_/1722567636/37c4c87b-03a4-41b8-8c85-64aa7c077670.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">Roaiss Women Luxury Gold Embroidered Robe...</p>

        <div className="mt-1 ml-1 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 76.20</span>
          <span className="text-gray-500 line-through text-sm">175</span>

          <span className="text-lg font-bold text-green-500">56%</span>
        </div>
      </div>
    </div>
        {/*  */}
        <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-50 ml-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/Z0935019B1D0DFE78F1F6Z/45/_/1691824159/0e5d6da7-9596-4dd2-af9a-f0eaf0668e38.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800">HANA & SARA PINK COLOUR...</p>

        <div className="mt-4 ml-3 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 80</span>
          <span className="text-gray-500 line-through text-sm">320</span>

          <span className="text-lg font-bold text-green-500">75%</span>
        </div>
      </div>
    </div>
        {/*  */}
        <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-50 ml-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/Z19D05AC73E0513B679D2Z/45/_/1691413961/b4b043ed-44f0-464a-8fed-771915b15f67.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800">HANA & SARA PURE VISCOSE...</p>

        <div className="mt-4 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 68</span>
          <span className="text-gray-500 line-through text-sm">320</span>

          <span className="text-lg font-bold text-green-500">78%</span>
        </div>
      </div>
    </div>
    
      </div>
    </div>

{/* maximize your savings */}
    <div class='bg-orange-100 mt-7'>
      <span class='font-bold italic text-2xl ml-3'><span class='text-red-600'>MAXIMIZE</span> YOUR SAVINGS</span>
      <div class= 'flex flex-wrap'>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/62852ccd-2fc9-4868-9e81-ddc4905a4bdf.png" alt="" class='mt-2 ml-3 w-77 h-80' />
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/105288a6-c726-454e-ab65-e2ba1f598467.png" alt="" class='mt-2 ml-3 w-77 h-80' />
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/736988f6-6b74-4064-a61d-55492f5231b3.png" alt="" class='mt-2 ml-3 w-77 h-80'/>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/6df571b2-a340-4c2a-ac27-27e763a02204.png" alt="" class='mt-2 ml-3 w-79 h-80'/>
      </div>
    </div>

{/* top deals in gaming */}
    <div className='mt-7 flex flex-wrap'>
      <div>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b23382ec-34b6-41fe-9e09-cc11913b2682.png" alt="" />
      </div>
       {/*  */}
       <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pnsku/N70022609V/45/_/1699418409/a609e3fa-897b-4f59-b0e8-d6c8c9bf0794.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">Sony Playstation 5</p>

        <p className="text-gray-600 ml-1 ">
          Slim Console (International Version) Disc...
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 1709</span>
          <span className="text-gray-500 line-through text-sm">2099</span>

          <span className="text-lg font-bold text-green-500">18%</span>
        </div>
      </div>
    </div>
    {/*  */}
    <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pnsku/N70089361V/45/_/1723115906/126a2d5f-f8c0-44e9-a9ab-3fc5662cdeb6.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">LG UltraGear</p>

        <p className="text-gray-600 ml-1 ">
           FHD 180Hz Gaming Monitor...
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 379</span>
          <span className="text-gray-500 line-through text-sm">699</span>

          <span className="text-lg font-bold text-green-500">45%</span>
        </div>
      </div>
    </div>{/*  */}
       <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pnsku/N16659460A/45/_/1699043322/65b45167-8594-4c53-92d7-29640995c762.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">HyperX Cloud II</p>

        <p className="text-gray-600 ml-1 ">
          Wired Gaming Headset- Black-Red...
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 185</span>
          <span className="text-gray-500 line-through text-sm">369</span>

          <span className="text-lg font-bold text-green-500">49%</span>
        </div>
      </div>
    </div>{/*  */}
       <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pnsku/N70095796V/45/_/1721996198/a664a18e-c6fe-40f6-8dae-922fe19ddded.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">EA Sports FC 25</p>

        <p className="text-gray-600 ml-1 ">
          Playstation-5 Game...
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 128</span>
          <span className="text-gray-500 line-through text-sm">159</span>

          <span className="text-lg font-bold text-green-500">14%</span>
        </div>
      </div>
    </div>
    {/*  */}
       <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pnsku/N70148318V/45/_/1740414039/16d7f57b-cffd-4a83-a288-a51bef9ccc80.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">TWISTED MINDS</p>

        <p className="text-gray-600 ml-1 ">
          27 inch Eco Series 120hz...
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 359</span>
          <span className="text-gray-500 line-through text-sm">399</span>

          <span className="text-lg font-bold text-green-500">10%</span>
        </div>
      </div>
    </div>{/*  */}
       <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-50 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pnsku/N70082549V/45/_/1717403508/c1e6a192-823b-4c7e-bf32-b793e77d6e4b.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">GameOn 27 inch Gaming Monitor</p>

        <div className="mt-1 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 1709</span>
          <span className="text-gray-500 line-through text-sm">2099</span>

          <span className="text-lg font-bold text-green-500">18%</span>
        </div>
      </div>
    </div>
    </div>
    
    {/* Best sellers in beauty */}
    <div className='flex flex-wrap'>
      <div>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b5207924-51ef-4955-8008-3db7d7cf9c0b.png" alt="" className='mt-12 ml-3 mb-4' />
      </div>
      {/*  */}
      <div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/ZF23DE5EC51560ADE2D7EZ/45/_/1738319731/2dac59cb-b30a-48f6-b1c2-104704afdda1.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">Lattafa Khamrah Unisex Eau De Parfum</p>

        <p className="text-gray-600 ml-1 ">
          by Lattafa 100ml
        </p>

        <div className="mt-1 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 77</span>
          <span className="text-gray-500 line-through text-sm">129</span>

          <span className="text-lg font-bold text-green-500">40%</span>
        </div>
      </div>
    </div>
{/*  */}
<div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/ZCEDAFBBBE4AA0329C34FZ/45/_/1711705084/05af8b7c-144c-4250-b906-e7de7dc8058b.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">K18 Leave-in Molecular Repair Hair Mask</p>

        <p className="text-gray-600 ml-1 ">
          50ml
        </p>

        <div className="mt-1 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 273</span>
        </div>
      </div>
    </div>
{/*  */}
<div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/v1689229849/N53419974A_1.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">Beauty of Joseon Relief</p>

        <p className="text-gray-600 ml-1 ">
          Sun: Rice + Probiotics 50ml
        </p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 37</span>
          <span className="text-gray-500 line-through text-sm">85</span>

          <span className="text-lg font-bold text-green-500">56%</span>
        </div>
      </div>
    </div>
{/*  */}
<div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pnsku/N23772548A/45/_/1737443401/d6655cd3-e53e-4bbd-9cfd-ca2f635c64a9.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">The Ordinary Niacinamide 10% AND Zinc 1%</p>

        <div className="mt-1 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 28.95</span>
          <span className="text-gray-500 line-through text-sm">55</span>

          <span className="text-lg font-bold text-green-500">47%</span>
        </div>
      </div>
    </div>
{/*  */}
<div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pnsku/N70102399V/45/_/1724302871/e61d49bd-c20d-49c8-83a8-d65db716c9d7.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">dyson Airwrap Multi-styler</p>

        <p className="text-gray-600 ml-1 ">
          with 8 Accessories
        </p>

        <div className="mt-1 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 1994</span>
          <span className="text-gray-500 line-through text-sm">2299</span>

          <span className="text-lg font-bold text-green-500">13%</span>
        </div>
      </div>
    </div>
{/*  */}
<div className="rounded-lg shadow-xl border-1 bg-white h-95 w-52 ml-2 mt-3 ">
      <center>
        <img 
        src="https://f.nooncdn.com/p/pzsku/Z14F066B82CEDBAA0BB96Z/45/1742557373/77d91ded-f76c-4255-8a08-4ae4a3825954.jpg?format=jpg&width=240" 
        alt="Product Image" 
        className="h-64 object-cover"
        />
        </center>

      <div className="p-1">
        <p className="text-lg text-gray-800 ml-2">LA ROCHE-POSAY Cicaplast</p>

        <div className="mt-2 ml-2 flex items-center space-x-4">
          <span className="text-xl font-bold text-black-500">AED 66</span>
          <span className="text-gray-500 line-through text-sm">90</span>

          <span className="text-lg font-bold text-green-500">26%</span>
        </div>
      </div>
    </div>

    </div>

    {/* Image ad */}
    <div className='mt-12 flex-wrap'>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/6b0d562e-5450-4f4a-bd19-2a6b4a871ea4.png" alt="" />
    </div>

<div className='bg-orange-200 mt-12 flex flex-wrap'>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/9bd4929d-438c-4ec5-b69f-f2a011713244.png" alt="" className='mt-5' />
  <div className='flex flex-wrap mt-3 mb-5'>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/ba9c31da-10e9-47e9-bea1-d8d8f6aaf270.png" alt="" className='ml-3 h-80 w-55'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/55b0f518-36d6-4036-9fa3-e1c457f71ae7.png" alt="" className='ml-3 h-80'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/412fc52b-9508-4321-840b-4181a38d4f85.png" alt="" className='ml-3 h-80'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/f25ae3cd-ee90-41a0-a705-b6485d1df630.png" alt="" className='ml-3 h-80'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/7182354c-6cc3-4a86-ac5f-e8f3c38837c4.png" alt="" className='ml-3 h-80'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/106a3951-0bc6-4da2-84eb-f075739e2319.png" alt="" className='ml-3 h-80'/>
</div>
</div>
{/*  */}
<div className='bg-pink-100 flex flex-wrap'>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8acf41d8-c265-4413-8a0b-06ed8bfb618f.png" alt="" className='mt-5'/>
  <div className='flex flex-wrap mt-3 mb-5'>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/50c9ef58-b65e-4ef2-b285-eba511547b80.png" alt="" className='ml-4 h-80 w-55'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/280cf2f3-a966-479e-a696-135cb79e4baf.png" alt="" className='ml-4 h-80 w-55'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/e880f3e5-9f05-40a7-bdb9-0582b77dd5d4.png" alt="" className='ml-4 h-80'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/118e579b-8575-420b-a42d-566429d3ef0d.png" alt="" className='ml-4 h-80'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/555f6fbc-0928-4001-bac2-bdb6a507d705.png" alt="" className='ml-4 h-80'/>
    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/cd063911-1eea-4398-972f-85a0463ff34e.png" alt="" className='ml-4 h-80'/>
</div>
</div>

{/* last ad */}
<div className='mt-4'>
  <img src="https://f.nooncdn.com/mpcms/EN0001/assets/c1073d7b-2c8b-49aa-a551-d065094cbeb8.png" alt="" />
</div>

{/* paras */}
<div className='flex-wrap mt-12'>
  <h1 className='text-gray-800 font-bold ml-3'>Superior online shopping in the UAE</h1>
  <p className='text-gray-500 mt-3 text-sm ml-3'>As the leading destination for online shopping in the UAE, noon has everything you need under one roof. Whether you’re shopping for the latest electronic products, fashion, homeware, products for kids and babies, books and stationery, sports and health essentials, beauty products, or groceries, we have millions of 
  <span className='text-blue-600 cursor-pointer'> Read More</span>
</p>
<h1 className='text-gray-800 font-bold mt-8 ml-3'>Shop the best products & brands at noon UAE</h1>
  <p className='text-gray-500 mt-3 text-sm ml-3'>You’ll find a massive variety of products from top brands at noon UAE. Our electronics department has the latest mobile phones, along with tablets, mobile accessories, laptops, wearable technology such as smartwatches and other wearable devices, headphones (in-ear, wireless and noise-cancelling), audiovisual
  <span className='text-blue-600 cursor-pointer'> Read More</span>
</p>
<h1 className='text-gray-800 mt-8 font-bold ml-3'>Hassle-free UAE online shopping</h1>
  <p className='text-gray-500 mt-3 text-sm ml-3'>When you buy online at noon, you will always have peace of mind knowing that you are getting the best level of service. We take the hassle out of online shopping in Abu Dhabi and Dubai, with a number of features and flexible payment plans that make shopping simpler, faster, and better. Our Buy Now, Pay Later plans include
<span className='text-blue-600 cursor-pointer'> Read More</span>
</p>
</div>

{/* ending */}
<div className="flex flex-wrap bg-gray-200 mt-10 justify-between items-center">
  <div className="text-left ml-10 mt-9 mb-9">
    <p className='font-bold text-xl text-gray-700'>We're Always Here To Help</p>
    <p className='text-gray-600'>Reach out to us through any of these support channels</p>
  </div>

  <div className="flex items-center text-right ml-45">
    <img 
      src="https://icon-library.com/images/information-icon-transparent/information-icon-transparent-24.jpg" 
      alt="" 
      className='h-5 w-5 mr-2' 
    />
    <div>
      <p className='text-xs font-bold text-gray-600'>HELP CENTER</p>
      <p className='font-bold text-md text-gray-700'>help.noon.com</p>
    </div>
  </div>

  <div className="flex items-center text-right mr-20">
    <img 
      src="https://th.bing.com/th/id/R.bb18bdbbef437b2d50518db5a8292c94?rik=cOvK7ERpnbu3Tw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2femail-icon-png-download-icons-logos-emojis-email-icons-2400.png&ehk=VQKlzNVcrMc2tLSKYacLzJ9XD4bCkYGXtMrARdqSBKQ%3d&risl=&pid=ImgRaw&r=0" 
      alt="" 
      className='h-4 w-6 mr-2' 
    />
    <div>
      <p className='text-xs font-bold text-gray-600'>EMAIL SUPPORT</p>
      <p className='font-bold text-md text-gray-700'>care@noon.com</p>
    </div>
  </div>
</div>

{/* bottom */}
<div className="py-10">
  <div className="container mx-auto ml-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10">
      <div>
        <h2 className="font-bold text-md text-gray-800 mb-6">ELECTRONICS</h2>
        <ul className="list-none text-sm text-gray-600">
          <li>mobiles</li>
          <li>tablets</li>
          <li>laptops</li>
          <li>home appliances</li>
          <li>camera, photo & video</li>
          <li>televisions</li>
          <li>headphones</li>
          <li>video games</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-md text-gray-800 mb-4">FASHION</h2>
        <ul className="list-none text-sm text-gray-600">
          <li>women's fashion</li>
          <li>men's fashion</li>
          <li>girls' fashion</li>
          <li>boys' fashion</li>
          <li>watches</li>
          <li>jewellery</li>
          <li>women's handbags</li>
          <li>men's eyewear</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-md text-gray-800 mb-4">HOME & KITCHEN</h2>
        <ul className="list-none text-sm text-gray-600">
          <li>bath</li>
          <li>home decor</li>
          <li>kitchen & dining</li>
          <li>Tools & Home Improvement</li>
          <li>audio & video</li>
          <li>furniture</li>
          <li>Patio, Lawn & Garden</li>
          <li>pet supplies</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-md text-gray-800 mb-4">BEAUTY</h2>
        <ul className="list-none text-sm text-gray-600">
          <li>fragrance</li>
          <li>make-up</li>
          <li>haircare</li>
          <li>skincare</li>
          <li>Bath & Body</li>
          <li>Electronic beauty tools</li>
          <li>men's grooming</li>
          <li>Health Care Essentials</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-md text-gray-800 mb-4">BABY & TOYS</h2>
        <ul className="list-none text-sm text-gray-600">
          <li>Diapering</li>
          <li>Baby Transport</li>
          <li>Nursing & Feeding</li>
          <li>Baby & Kids Fashion</li>
          <li>Baby & Toddler Toys</li>
          <li>Tricycles & Scooters</li>
          <li>Board Games & Cards</li>
          <li>Outdoor Play</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-md text-gray-800 mb-4">TOP BRANDS</h2>
        <ul className="list-none text-sm text-gray-600">
          <li>Pampers</li>
          <li>apple</li>
          <li>nike</li>
          <li>samsung</li>
          <li>tefal</li>
          <li>L'Oréal Paris</li>
          <li>skechers</li>
          <li>BLACK+DECKER</li>
        </ul>
      </div>

      <div>
        <h2 className="font-bold text-md text-gray-800 mb-4">DISCOVER NOW</h2>
        <ul className="list-none text-sm text-gray-600">
          <li>noon Digest</li>
          <li>Brand Glossary</li>
          <li>Best mobile phones</li>
          <li>supermall</li>
          <li>Trending Searches</li>
          <li>Ramadan Sale</li>
          <li>Macbook Pro</li>
          <li>Macbook Air</li>
          <li>IPL Live Streaming</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default App;
