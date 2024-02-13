function SimBenefitsItem({label, dataone, datatwo}) {
  return (
    <>
      <section>
        <label>{label}</label>
        <div className="simulador-benefits-item d-flex justify-content-between">
          <p className="ms-2">{dataone} {datatwo}</p>
          <p className="me-2">✅</p>
        </div>
      </section>
    </>
  );
}

export default SimBenefitsItem;
