# Guia de Personalização - JLS Tecnologia

Este documento contém instruções detalhadas para personalizar a landing page.

## 📞 Informações de Contato

### WhatsApp

**Arquivos a editar:**
1. `components/ContactSection.tsx` - Linha 23
2. `components/Footer.tsx` - Linha 47

**Código atual:**
```typescript
const whatsappUrl = `https://wa.me/5543999999999?text=${encodeURIComponent(whatsappMessage)}`;
```

**Substitua** `5543999999999` pelo seu número no formato: `55` + `DDD` + `Número`

Exemplo: `5543991234567` para (43) 99123-4567

### E-mails

**Arquivos a editar:**
1. `components/ContactSection.tsx` - Linhas 125 e 127
2. `components/Footer.tsx` - Links de suporte

**E-mails atuais:**
- `contato@jlstecnologia.com.br`
- `suporte@jlstecnologia.com.br`

### Telefone

**Arquivos a editar:**
1. `components/ContactSection.tsx` - Linha 116
2. `components/Footer.tsx` - Linha 52

**Formato atual:** `(43) 99999-9999`

## 🎨 Logo e Branding

### Logo Principal

**Localização:** `public/images/logo.jpg`

**Tamanho recomendado:** 200x200px (quadrado)

**Formato:** JPG, PNG ou WEBP

**Como substituir:**
1. Coloque sua nova logo em `public/images/`
2. Se usar nome diferente, atualize os imports em:
   - `components/Header.tsx` - Linha 42
   - `components/AboutSection.tsx` - Linha 63
   - `components/Footer.tsx` - Linha 61

### Nome da Empresa

**Arquivos principais:**
- `components/Header.tsx` - Linha 47
- `components/Footer.tsx` - Linha 66
- `app/layout.tsx` - Metadata (linhas 19-22)

**Buscar e substituir:**
- "JLS Tecnologia" → Seu nome
- "JLS" → Sua sigla

### Cores

**Arquivo:** `tailwind.config.ts`

**Paleta atual:**
```typescript
colors: {
  primary: {
    DEFAULT: '#0F2FFF',  // Azul elétrico
    dark: '#0A1FB3',
  },
  accent: {
    DEFAULT: '#00D4FF',  // Ciano
    light: '#33DEFF',
  },
}
```

**Dica:** Use [Coolors.co](https://coolors.co) para gerar paletas harmoniosas.

## 📝 Conteúdo

### Estatísticas (Stats Section)

**Arquivo:** `components/StatsSection.tsx` - Linhas 11-16

**Valores atuais:**
- 150+ Empresas Atendidas
- 8+ Anos de Experiência
- 98% Clientes Satisfeitos
- 24h Tempo Médio de Resolução

**Como alterar:**
```typescript
const stats: Stat[] = [
  { value: 150, label: "Empresas Atendidas", suffix: "+", prefix: "" },
  // Altere os valores aqui
];
```

### Depoimentos

**Arquivo:** `components/TestimonialsSection.tsx` - Linhas 6-38

**Estrutura de cada depoimento:**
```typescript
{
  name: "Nome do Cliente",
  role: "Cargo",
  company: "Nome da Empresa",
  avatar: "NC",  // Iniciais
  text: "Texto do depoimento...",
  rating: 5,
}
```

### Serviços

**Arquivo:** `components/ServicesSection.tsx` - Linhas 7-44

**Estrutura:**
```typescript
{
  icon: Monitor,  // Importado do lucide-react
  title: "Título do Serviço",
  subtitle: "Subtítulo chamativo",
  features: [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ],
  color: "from-blue-500/20 to-primary/20",
  iconColor: "text-blue-400",
}
```

### Projetos de Desenvolvimento

**Arquivo:** `components/DevelopmentSection.tsx` - Linhas 6-30

**Adicionar/remover tecnologias:**
```typescript
tech: ["Next.js", "React", "Tailwind"],
```

## 🌐 SEO e Metadata

**Arquivo:** `app/layout.tsx` - Linhas 19-31

**Informações editáveis:**
```typescript
export const metadata: Metadata = {
  title: "Seu título",
  description: "Sua descrição (máx 160 caracteres)",
  keywords: ["palavra1", "palavra2", "palavra3"],
  openGraph: {
    title: "Título para redes sociais",
    description: "Descrição para compartilhamento",
    // Adicione imagem:
    images: ['/images/og-image.jpg'],
  },
};
```

**Recomendação:** Crie uma imagem `og-image.jpg` (1200x630px) em `public/images/` para compartilhamento em redes sociais.

## 📍 Localização

**Arquivo:** `components/AboutSection.tsx` - Linha 74

**Texto atual:** "Cambé/PR"

**Arquivo:** `components/ContactSection.tsx` - Linha 104

**Endereço completo**

## 🕒 Horário de Atendimento

**Arquivo:** `components/ContactSection.tsx` - Linhas 140-154

**Horários atuais:**
- Segunda a Sexta: 8h às 18h
- Sábado: 8h às 12h
- Domingo: Fechado

## 🔗 Redes Sociais

**Arquivo:** `components/Footer.tsx` - Linhas 32-48

**Links atuais:**
```typescript
const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/jlstecnologia",
    label: "Instagram",
  },
  // Adicione mais redes...
];
```

**Redes disponíveis no Lucide:**
- Instagram
- Linkedin
- Facebook
- Twitter
- Youtube
- Github

## 🚀 Próximos Passos

### 1. Google Analytics

Adicione em `app/layout.tsx` antes do `</head>`:

```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 2. Favicon

Coloque `favicon.ico` em `app/favicon.ico`

### 3. Google Maps

Para adicionar mapa no rodapé do contato:

```typescript
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

### 4. Formulário Real

Integre com:
- **Formspree** (mais simples)
- **EmailJS** (sem backend)
- **Resend** (API moderna)
- **SendGrid** (enterprise)

### 5. WhatsApp Float Button

Adicione em `components/Header.tsx` ou crie componente separado:

```typescript
<a
  href="https://wa.me/5543999999999"
  className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageCircle size={28} className="text-white" />
</a>
```

## 🐛 Solução de Problemas

### Fontes não carregam

Verifique conexão com Google Fonts em `app/layout.tsx`

### Imagens quebradas

Certifique-se que as imagens estão em `public/images/`

### Animações não funcionam

Verifique classes do Tailwind em `tailwind.config.ts` - seção `animation`

### Build falha

Execute:
```bash
npm run build
```

E corrija os erros TypeScript apontados.

## 📞 Suporte

Para dúvidas sobre personalização, consulte a documentação oficial:

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

---

**Boa sorte com sua landing page! 🚀**
