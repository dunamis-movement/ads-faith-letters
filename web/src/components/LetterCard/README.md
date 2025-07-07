# LetterCard Component

Componente para exibir informações de uma carta de fé, incluindo remetente, conteúdo e versículo bíblico.

## Uso

```tsx
import { LetterCard } from '../components';
import type { Letter } from '../types';

const letter: Letter = {
  id: '1',
  missionaryId: 'missionary-1',
  content: 'Querida Isabela, espero que esteja bem...',
  verse: {
    id: 'verse-1',
    reference: 'Romanos 8:28',
    text: 'Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.'
  },
  senderName: 'Carlos Mendes',
  date: '2024-05-15T10:30:00Z'
};

function App() {
  return (
    <div>
      <LetterCard letter={letter} />
    </div>
  );
}
```

## Props

### LetterCardProps

| Prop | Tipo | Descrição |
|------|------|----------|
| letter | Letter | Objeto contendo todas as informações da carta |

## Interface Letter

```typescript
interface Letter {
  id: string;
  missionaryId: string;
  content: string;
  verse: Verse;
  senderName: string;
  date: string;
}

interface Verse {
  id: string;
  reference: string;
  text: string;
}
```

## Características

- **Design responsivo**: Adapta-se a diferentes tamanhos de tela
- **CSS Modules**: Estilos isolados e reutilizáveis
- **Formatação de data**: Exibe a data em formato brasileiro
- **Seção de versículo**: Destaque especial para versículos bíblicos
- **Efeitos hover**: Animações suaves de interação
- **Tipografia**: Usa as fontes Montserrat e Barlow do projeto

## Estilo

O componente segue o padrão de design do projeto com:
- Bordas arredondadas (16px)
- Sombras suaves
- Gradiente no cabeçalho
- Seção destacada para versículos
- Cores consistentes com o tema