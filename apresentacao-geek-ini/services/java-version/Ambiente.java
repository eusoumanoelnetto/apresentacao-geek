package services.java_version;

/**
 * Representa o ambiente com o qual o agente interage.
 * Para simplificar, o ambiente tem apenas um estado que o agente pode perceber.
 */
public class Ambiente {
    private String estado;

    public Ambiente(String estadoInicial) {
        this.estado = estadoInicial;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String novoEstado) {
        System.out.println("[Ambiente] Estado mudou para: " + novoEstado);
        this.estado = novoEstado;
    }
}
