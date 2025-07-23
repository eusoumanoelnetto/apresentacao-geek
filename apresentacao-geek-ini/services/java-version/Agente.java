package services.java_version;

/**
 * Interface que define o comportamento básico de um agente.
 * Um agente deve ser capaz de perceber o ambiente e agir sobre ele.
 */
public interface Agente {
    /**
     * Percebe o estado atual do ambiente.
     * @param ambiente O ambiente a ser percebido.
     * @return Uma representação da percepção do agente.
     */
    String perceber(Ambiente ambiente);

    /**
     * Decide qual ação tomar com base na percepção.
     * @param percepcao A percepção atual do ambiente.
     * @return A ação a ser executada.
     */
    String agir(String percepcao);

    /**
     * Executa a lógica do agente.
     * @param ambiente O ambiente onde o agente atua.
     */
    void executar(Ambiente ambiente);
}
