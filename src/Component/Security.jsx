import "../assets/css/Security.css";

function Security() {
  return (
    <>
      {/* Hero Section */}
      <section className="security-hero text-white py-5">
        <div className="container text-center">
          <h2 className="mb-3">Safe & Secure Banking</h2>
          <p className="lead">
            Your transactions are protected with high-level security and encryption.
            We ensure fast, reliable, and safe banking operations.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 features-section">
        <div className="container">
          <div className="row text-center g-4">

            <div className="col-md-4">
              <div className="card feature-card shadow h-100">
                <div className="card-body">
                  <h5>🔒 100% Secure</h5>
                  <p>All transactions are encrypted and protected.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card feature-card shadow h-100">
                <div className="card-body">
                  <h5>✅ Verified Users</h5>
                  <p>Only authenticated users can access accounts.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card feature-card shadow h-100">
                <div className="card-body">
                  <h5>🕒 24/7 Monitoring</h5>
                  <p>Continuous monitoring to prevent fraud.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Security;
