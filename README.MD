# Exercício App com Recursos Nativos

**Objetivo**: combinar diversos recursos nativos na construção de um app React Native

## Opção 1: App para registro de fotos de lugares visitados

[Protótipo de referência para layout](https://www.figma.com/proto/mGuN1IhCjQQaDP1vJGuH9U/Wireframes-Apps?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=BPJFhj43hxXgjyMc-1)
O app deverá ter:

- Um botão para acionar a câmera para tirar uma foto do lugar
- Um botão que obtenha a localização atual do usuário (ou seja, do local onde ele está tirando a foto)
- Um campo de entrada de texto para digitar um nome/título para a foto/local
  **Desafios:**
- Salvar o lugar visitado usando algum recurso de armazenamento local (async storage ou api-fake com json-server) ou remoto (Firebase)
- Exibir em uma tela uma lista com as fotos/lugares
- Fazer o build do aplicativo gerando um arquivo executável APK (somente Android)
  Este aplicativo deverá combinar **pelo menos** os recursos nativos: `ImagePicker`, `MapView` e `Location`.
  _Fique a vontade para adicionar qualquer outro recurso que achar necessário!_

## Opção 2: App para marcação de ponto

[Protótipo de referência para layout](https://www.figma.com/proto/RporuvGG9sgKVt9HDjOgnP/Wireframes-Apps?type=design&node-id=1-98&t=y2sNgQUArUTbDKnV-1&scaling=scale-down&page-id=1%3A97&starting-point-node-id=1%3A98&mode=design)
O app deverá ter:

- Carregamento automático da localização do usuário ao entrar no app
- Programação para obter a data/hora no momento em que o usuário estiver registrando o ponto
- Um botão para salvar (simulação) o registro do ponto
- Exibição de mensagem em um Alert confirmando o registro
  **Desafios:**

- Salvar o registro usando algum recurso de armazenamento local (async storage ou api-fake com json-server) ou remoto (Firebase)
- Descobrir qual o nome da rua a partir da longitude e latitude (há APIs para isso, como por exemplo a: https://nominatim.openstreetmap.org/ui/reverse.html
- Descobrir qual o nome da rua a partir da longitude e latitude (pesquise se há APIs para isso e se houver, tente implementar o código para esta finalidade)
- Fazer o build do aplicativo gerando um arquivo executável APK (somente Android)

Este aplicativo deverá combinar **pelo menos** os recursos nativos: `MapView` e `Location`.
_Fique a vontade para adicionar qualquer outro recurso que achar necessário!_
