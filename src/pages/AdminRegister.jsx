import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerCenterAdmin } from "../services/auth";
import "./register.css";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    providerName: "",
    description: "",
    logo: "",
    location: "",
    category: "",
    services: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerCenterAdmin(form);
      navigate("/admin/login");
    } catch (err) {
      setError(err.message || "Admin registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page login-wrapper">
      <div className="login-card">
        <h2>Center Admin Register</h2>
        <p className="subtitle">Set your center login password</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="providerName"
            placeholder="Service Provider Name"
            value={form.providerName}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            rows={3}
          />

          <input
            type="text"
            name="logo"
            placeholder="Logo URL"
            value={form.logo}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category (office, company, healthcare, etc.)"
            value={form.category}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="services"
            placeholder="Services (comma separated)"
            value={form.services}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location / City"
            value={form.location}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Set Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register Admin"}
          </button>
        </form>

        <p className="login-link">
          Already registered? <Link to="/admin/login">Login</Link>
        </p>
        <p className="login-link">
          User register? <Link to="/register">User Register</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
