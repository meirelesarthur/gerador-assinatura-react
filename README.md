# Gerador de Assinatura (GB Agritech)

App React (Vite) que gera a assinatura de e-mail em PNG. Pronto para Cloudflare Workers (static assets).

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera ./dist
npm run deploy   # build + wrangler deploy
```

Também é possível conectar o repositório ao Cloudflare Workers Builds com build `npm run build` e deploy `npx wrangler deploy`.
