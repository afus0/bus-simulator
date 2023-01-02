package dao;

import java.sql.SQLException;
import java.util.List;

public interface Crud_DB<T> {

	public void insert(T temp) throws SQLException;
	public boolean delete(int key) throws SQLException;
	public boolean update (int key, T temp) throws SQLException;
	public T select (int key) throws SQLException;
	public List<T> selectAll () throws SQLException;

}
