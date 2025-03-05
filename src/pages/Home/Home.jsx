import "../../App.scss";

const Home = () => {
  return (
    <div className="container">
      <section className="section">
        <h1>Welcome to My React App</h1>
        <div className="grid cols-3">
          <div className="card">Item 1</div>
          <div className="card">Item 2</div>
          <div className="card">Item 3</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
