import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import  Card  from "../../../vite-project/src/Card";

const App = () => {
  const [items, setItems] = useState([]); // State to hold the data

  useEffect(() => {
    axios.get('https://dummyjson.com/products') 
      .then(response => {
        console.log(response);
        setItems(response.data.products); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);
    
    return ( 
      <>
{/* Bootstrap Navbar */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src="https://latestlogo.com/wp-content/uploads/2024/01/olx-logo.png"
        alt="olx-logo"
        style={{ height: '70px', marginLeft: '10px' }}
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '90px' }}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{ marginLeft: '30px' }}>
            Login
          </a>
        </li>
      </ul>
      <form className="d-flex ms-auto" role="search" style={{ width: '480px', marginLeft:'30px' }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-secondary" type="submit" style={{ marginLeft: '5px' }}>
          Search
        </button>
      </form>
    </div>
  </div>
</nav>


    <div className='mt-3 ml-2'>
      <img src="https://images.olx.com.pk/thumbnails/525697806-800x600.webp" alt="" />
    </div>

    {/* Cards Section */}
    <div className="container my-5">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4 border-b-4">
            <Card
              title={item.title}
              price={item.price}
              image={item.images}
              description={item.description}
            />
          </div>
        ))}
      </div>

      {/* Ads */}
          <div><center><img src="https://s0.2mdn.net/simgad/4272638377872236818" alt="" /></center></div>
      {/* bottom image */}
      <div className="container">
  <div className="row align-items-center">
    <div className="col-12 col-md-4 d-flex justify-content-end mb-4">
      <img 
        src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" 
        alt="OLX App" 
        className="img-fluid" 
        style={{ maxHeight: '200px', objectFit: 'cover' }}
      />
    </div>

    <div className="col-12 col-md-4 text-center mb-4">
      <h3>Try the OLX app</h3>
      <h6>Buy, sell and find just about anything using the app on your mobile.</h6>
    </div>

    <div className="col-12 col-md-4 d-flex flex-column justify-content-start align-items-start mb-4">
      <p className="mb-2">GET YOUR APP TODAY</p>

      <div className="d-flex">
        <img 
          src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" 
          alt="App Store" 
          style={{ height: '35px' }} 
          className="me-2" 
        />
        <img 
          src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" 
          alt="Google Play" 
          style={{ height: '35px' }} 
          className="me-2" 
        />
        <img 
          src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" 
          alt="App Gallery" 
          style={{ height: '35px' }} 
        />
      </div>
    </div>
  </div>
</div>
    </div>
  </>
);
};

export default App
