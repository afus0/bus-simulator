package model;

public class Cliente {
	private int numero_carta;
	private String titolare;
	private int emissione;
	private String scadenza;
	private int cvv;

	public Cliente(int numero_carta, String titolare, int emissione, String scadenza, int cvv) {
		super();
		this.numero_carta = numero_carta;
		this.titolare = titolare;
		this.emissione = emissione;
		this.scadenza = scadenza;
		this.cvv = cvv;
	}
	
	public Cliente() {
		this.numero_carta = 0;
		this.titolare = null;
		this.emissione = 0;
		this.scadenza = null;
		this.cvv = 0;
	};
	public int getNumero_carta() {
		return numero_carta;
	}

	public void setNumero_carta(int numero_carta) {
		this.numero_carta = numero_carta;
	}

	public String getTitolare() {
		return titolare;
	}

	public void setTitolare(String titolare) {
		this.titolare = titolare;
	}

	public int getEmissione() {
		return emissione;
	}

	public void setEmissione(int emissione) {
		this.emissione = emissione;
	}

	public String getScadenza() {
		return scadenza;
	}

	public void setScadenza(String scadenza) {
		this.scadenza = scadenza;
	}

	public int getCvv() {
		return cvv;
	}

	public void setCvv(int cvv) {
		this.cvv = cvv;
	}

	@Override
	public String toString() {
		return "Cliente [numero_carta=" + numero_carta + ", titolare=" + titolare + ", emissione=" + emissione
				+ ", scadenza=" + scadenza + ", cvv=" + cvv + "]";
	}

}
