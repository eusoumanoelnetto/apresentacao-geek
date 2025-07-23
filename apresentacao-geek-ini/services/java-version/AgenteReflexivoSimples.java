package services.java_version;

import java.util.HashMap;
import java.util.Map;

/**
 * Uma implementação de um Agente Reflexivo Simples.
 * Este agente reage a percepções com base em um conjunto de regras predefinidas.
 * Não possui memória de estados passados.
 */
public class AgenteReflexivoSimples implements Agente {
    private Map<String, String> regras;

    public AgenteReflexivoSimples() {
        regras = new HashMap<>();
        regras.put("local sujo", "limpar");
        regras.put("local limpo", "não fazer nada");
        regras.put("obstáculo", "desviar");
    }

    @Override
    public String perceber(Ambiente ambiente) {
        return ambiente.getEstado();
    }

    @Override
    public String agir(String percepcao) {
        // Retorna a ação correspondente à percepção, ou uma ação padrão se não houver regra.
        return regras.getOrDefault(percepcao, "ação indefinida");
    }

    @Override
    public void executar(Ambiente ambiente) {
        String percepcao = perceber(ambiente);
        String acao = agir(percepcao);
        System.out.println("[Agente] Percebi que o " + percepcao + ". Ação: " + acao);
    }
}
