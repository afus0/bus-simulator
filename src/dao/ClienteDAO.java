package dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;
import model.Cliente;

public class ClienteDAO implements Crud_DB<Cliente>{

	@Override
	public void insert(Cliente temp) throws SQLException {
		ConnessioneDB.connect();
		String query = "INSERT INTO cliente (numero_carta, titolare, emissione, scadenza, cvv) VALUES" + "(?,?,?,?,?);";
		PreparedStatement st = ConnessioneDB.getCon().prepareStatement(query);
		st.setInt(1, temp.getNumero_carta());
		st.setString(2, temp.getTitolare());
		st.setInt(3, temp.getEmissione());
		st.setString(4, temp.getScadenza());
		st.setInt(5, temp.getCvv());
		st.executeUpdate();
		ConnessioneDB.close();
		System.out.println("Il cliente: " + temp.getTitolare() + " è stato aggiunto!");
	}

	@Override
	public boolean delete(int key) throws SQLException {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean update(int key, Cliente temp) throws SQLException {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Cliente select(int key) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Cliente> selectAll() throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

}
