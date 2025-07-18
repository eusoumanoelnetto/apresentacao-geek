# Script para criar e enviar tag automaticamente após commit
# Lê a mensagem do último commit
$message = git log -1 --pretty=%B
<# Verifica se a mensagem começa com tag no formato vX.Y -> captura X.Y #>
if ($message -match '^v(\d+\.\d+)') {
    # Usa grupo de captura para pegar apenas números e recompor com 'v'
    $tag = "v$($Matches[1])"
    # Cria a tag e envia para o remote
    git tag $tag
    git push origin $tag
}
