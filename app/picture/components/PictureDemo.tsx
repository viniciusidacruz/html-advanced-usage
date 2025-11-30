"use client";

import { Document } from "@/components";

export const PictureDemo = () => {
  return (
    <>
      <Document.Heading2>Demonstração</Document.Heading2>

      <Document.Paragraph>
        Redimensione a janela do navegador para ver o elemento picture em ação.
        Diferentes imagens serão carregadas baseado no tamanho da tela.
      </Document.Paragraph>

      <div className="max-w-2xl space-y-6">
        <div className="border border-zinc-700 rounded-lg overflow-hidden bg-zinc-800 p-6">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/next.png" />
            <source media="(min-width: 768px)" srcSet="/js.png" />
            <img
              src="/react.png"
              alt="Demonstração de imagem responsiva"
              className="w-32 h-32 mx-auto object-contain"
            />
          </picture>
          <p className="text-center text-zinc-400 text-sm mt-4">
            A imagem muda conforme o tamanho da tela
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          <div className="p-3 bg-cyan-500/20 border border-cyan-500/50 rounded-lg">
            <img src="/react.png" alt="React" className="w-8 h-8 mx-auto mb-2" />
            <div className="text-cyan-400 font-semibold">Mobile</div>
            <div className="text-zinc-400">&lt;768px</div>
          </div>
          <div className="p-3 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
            <img src="/js.png" alt="JavaScript" className="w-8 h-8 mx-auto mb-2" />
            <div className="text-yellow-400 font-semibold">Tablet</div>
            <div className="text-zinc-400">≥768px</div>
          </div>
          <div className="p-3 bg-zinc-500/20 border border-zinc-500/50 rounded-lg">
            <img src="/next.png" alt="Next.js" className="w-8 h-8 mx-auto mb-2" />
            <div className="text-zinc-300 font-semibold">Desktop</div>
            <div className="text-zinc-400">≥1024px</div>
          </div>
        </div>

        <Document.Paragraph>
          <strong className="text-zinc-300">Dica:</strong> Abra o DevTools (F12)
          e alterne entre dispositivos para ver a troca de imagens em tempo real.
        </Document.Paragraph>
      </div>
    </>
  );
};
