# MissionaryCard Component

Componente React para exibir informações de um missionário em formato de card.

## Características

- **Design moderno**: Card com bordas arredondadas, sombras suaves e efeitos hover
- **CSS Modules**: Estilos isolados e reutilizáveis
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Bandeiras automáticas**: Exibe a bandeira correta baseada no país do missionário
- **TypeScript**: Totalmente tipado para melhor experiência de desenvolvimento

## Uso

```tsx
import { MissionaryCard } from './components';
import type { Missionary } from './types';

const missionary: Missionary = {
  id: '1',
  name: 'João Silva',
  field: 'Plantação de igrejas',
  country: 'Brasil',
  bio: 'Trabalhando com comunidades rurais...',
  imageUrl: 'https://example.com/photo.jpg'
};

function App() {
  return (
    <MissionaryCard missionary={missionary} />
  );
}
```

## Props

| Prop | Tipo | Descrição |
|------|------|----------|
| `missionary` | `Missionary` | Objeto contendo as informações do missionário |

## Interface Missionary

```typescript
interface Missionary {
  id: string;
  name: string;
  field: string;
  country: string;
  bio: string;
  imageUrl: string;
}
```

## Países Suportados

O componente inclui bandeiras para os seguintes países:
- Camboja 🇰🇭
- Indonésia 🇮🇩
- Espanha 🇪🇸
- Brasil 🇧🇷
- Estados Unidos 🇺🇸
- França 🇫🇷
- Alemanha 🇩🇪
- Japão 🇯🇵
- China 🇨🇳
- Índia 🇮🇳

Para países não listados, será exibido o emoji 🌍.

## Estrutura de Arquivos

```
components/
└── MissionaryCard/
    ├── index.tsx
    ├── MissionaryCard.module.css
    └── README.md
```

## Customização

Os estilos podem ser customizados editando o arquivo `MissionaryCard.module.css`. O componente utiliza as seguintes classes CSS:

- `.card` - Container principal do card
- `.imageContainer` - Container da imagem
- `.image` - Imagem do missionário
- `.content` - Container do conteúdo
- `.name` - Nome do missionário
- `.bio` - Biografia
- `.details` - Container dos detalhes (país e campo)
- `.country` - Badge do país
- `.field` - Badge do campo de atuação
- `.flag` - Emoji da bandeira