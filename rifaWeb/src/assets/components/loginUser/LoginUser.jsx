import "./style.css";

const LoginModal = ({ showModal, onClose }) => {
  if (!showModal) return null;

  const handleClickOutside = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };
  return (
    <div className="modal-overlay" onClick={handleClickOutside}>
      <div className="modal-content">
        <h2>MEUS TÍTULOS</h2>
        <p>
          Preencha os campos abaixo com os mesmos dados que foram utilizados no
          momento da compra.
        </p>
        <form>
          <div className="modal-content-info">
            <div className="form-group">
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="073.426.275-26"
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                placeholder="(79) 99182-8222"
              />
            </div>
          </div>
          <button type="button" onClick={onClose}>
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
