# Sistema de Animações - HaruCode

## Componentes Disponíveis

### 1. PageTransition

Wrapper para animações de entrada/saída de páginas.

```tsx
import PageTransition from "@/components/PageTransition";

export default function MinhaPage() {
  return <PageTransition>{/* Conteúdo da página */}</PageTransition>;
}
```

### 2. AnimatedElement

Animações para elementos individuais com diferentes variantes.

```tsx
import AnimatedElement from "@/components/AnimatedElement";

<AnimatedElement variant="slideUp" delay={0.2}>
  <h1>Meu Título</h1>
</AnimatedElement>;
```

### 3. AnimatedButton

Botão com animações de hover e tap.

```tsx
import AnimatedButton from "@/components/AnimatedButton";

<AnimatedButton variant="secondary" size="lg">
  Clique Aqui
</AnimatedButton>;
```

## Padrões de Uso

### Sequência de Animações

- Use delays crescentes (0.2, 0.4, 0.6) para criar sequências
- Título: `slideUp` com delay 0.2
- Subtítulo: `fadeIn` com delay 0.4
- Botão: `scaleIn` com delay 0.6

### Variantes Recomendadas

- **Títulos**: `slideUp` ou `slideInLeft/Right`
- **Textos**: `fadeIn`
- **Botões/Cards**: `scaleIn`
- **Listas**: `slideUp` com delays diferentes

## Performance

- Todas as animações são otimizadas para performance
- Usam `transform` e `opacity` para GPU acceleration
- Duração padrão: 0.5s para elementos, 0.6s para páginas
