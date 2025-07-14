# Modal Component

Componente Modal reutilizável que permite renderizar conteúdo em uma sobreposição modal.

## Características

- **Flexível**: Aceita qualquer conteúdo através da prop `children`
- **Acessível**: Suporte a navegação por teclado (ESC para fechar)
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Animado**: Transições suaves de entrada e saída
- **CSS Modules**: Estilos isolados e modulares

## Props

| Prop | Tipo | Obrigatório | Descrição |
|------|------|-------------|------------|
| `children` | `ReactNode` | ✅ | Conteúdo a ser renderizado dentro do modal |
| `isOpen` | `boolean` | ✅ | Controla se o modal está visível |
| `onClose` | `() => void` | ✅ | Função chamada quando o modal deve ser fechado |
| `title` | `string` | ❌ | Título opcional exibido no cabeçalho do modal |

## Exemplo de Uso

```tsx
import { useState } from 'react';
import { Modal } from '../components';

function ExemploModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Abrir Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Título do Modal"
      >
        <div>
          <p>Conteúdo do modal aqui...</p>
          <button onClick={() => setIsModalOpen(false)}>
            Fechar
          </button>
        </div>
      </Modal>
    </div>
  );
}
```

## Funcionalidades

### Fechamento do Modal

O modal pode ser fechado de várias formas:
- Clicando no botão "×" no cabeçalho (quando `title` é fornecido)
- Pressionando a tecla ESC
- Clicando fora do conteúdo do modal (no overlay)
- Programaticamente chamando a função `onClose`

### Prevenção de Scroll

Quando o modal está aberto, o scroll da página é automaticamente desabilitado para melhorar a experiência do usuário.

### Responsividade

O modal se adapta automaticamente a diferentes tamanhos de tela:
- Desktop: Modal centralizado com tamanho máximo
- Tablet: Ajustes de padding e tamanhos
- Mobile: Modal ocupa quase toda a tela com bordas arredondadas

## Acessibilidade

- Suporte completo a navegação por teclado
- Aria-label no botão de fechar
- Foco gerenciado automaticamente
- Contraste adequado em todos os elementos