const Header = () => {
  return <h1>Header Component</h1>;
};

const Footer = () => {
  return <h1>Footer Component</h1>;
};




const  WhyChooseUs = () => {
  return <p>Because we are the best</p>;
};

    





const Layout = () => {
  return (
    <div>

 <Header />

 <main>
    <WhyChooseUs/>
   
    </main>


      <Footer />

    </div>
     
    
  );
};

export default Layout;