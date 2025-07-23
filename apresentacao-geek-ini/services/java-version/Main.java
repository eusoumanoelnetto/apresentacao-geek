package services.java_version;

/**
 * Classe principal para demonstrar a interação entre o Agente e o Ambiente.
 */
public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração de Agente de IA em Java ---");

        // 1. Criar o ambiente com um estado inicial
        Ambiente meuAmbiente = new Ambiente("local sujo");

        // 2. Criar o agente
        Agente meuAgente = new AgenteReflexivoSimples();

        // 3. Executar o ciclo de percepção-ação do agente
        System.out.println("\nCiclo 1:");
        meuAgente.executar(meuAmbiente);

        // 4. Mudar o estado do ambiente
        meuAmbiente.setEstado("local limpo");

        // 5. Executar o ciclo novamente com o novo estado
        System.out.println("\nCiclo 2:");
        meuAgente.executar(meuAmbiente);
        
        // 6. Mudar para um estado desconhecido pelo agente
        meuAmbiente.setEstado("porta fechada");
        
        System.out.println("\nCiclo 3:");
        meuAgente.executar(meuAmbiente);
    }
}
