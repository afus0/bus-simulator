package controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.ClienteDAO;
import model.Cliente;

/**
 * Servlet implementation class Acquista
 */
@WebServlet("/Acquista")
public class Acquista extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private Cliente cliente;
    private ClienteDAO dao;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Acquista() {
        this.dao = new ClienteDAO();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		int numero = Integer.parseInt(request.getParameter("numero"));
		String titolare = request.getParameter("name");
		int emissione = Integer.parseInt(request.getParameter("data"));
		String scadenza = request.getParameter("scadenza");
		int cvv = Integer.parseInt(request.getParameter("cvv"));
		this.cliente = new Cliente(numero, titolare, emissione, scadenza, cvv);
		try {
			dao.insert(cliente);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		RequestDispatcher dispatcher = request.getRequestDispatcher("Home");
		dispatcher.forward(request, response);
		
		System.out.println(new Cliente(numero, titolare, emissione, scadenza, cvv));
	}

}
